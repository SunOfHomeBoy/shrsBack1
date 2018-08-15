<style lang="less">
    @import './login.less';
</style>

<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请输入用户名">
                            <span slot="prepend">
                                <Icon :size="16" type="person"></Icon>
                            </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                            <span slot="prepend">
                                <Icon :size="14" type="locked"></Icon>
                            </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long>登录</Button>
                        </FormItem>
                    </Form>
                    <p v-show="unLogin" class="login-tip">用户名或密码错误</p>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';
import logoH from '@/images/logo-min.jpg'
// import api from '@/libs/utils'
// var api = require('@/libs/utils/api.js')
var Utils = require('@/libs/utils')

export default {
    data() {
        return {
            unLogin: false,
            form: {
                userName: '',
                password: ''
            },
            rules: {
                userName: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        handleSubmit() {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    Utils.api('/api/signin', {
                        user: this.form.userName,
                        password: this.form.password
                    }, callback => {
                        console.log(callback);
                        if (callback.code === 200) this.skip()
                        if (callback.code === 2018) {
                            this.unLogin = true
                            this.$Message.error('用户名或密码错误')
                        }
                    })
                }
            });
        },
        skip() {
            // console.log(this.$router);
            let user = Cookies.get('user')
            let maxAge = 60 * 5;

            if (user) {
                this.$store.commit('setAvator', logoH);
                if (this.form.userName === '四海日盛') {
                    Cookies.set('access', 0, { 'max-age': maxAge });
                } else {
                    Cookies.set('access', 1, { 'max-age': maxAge });
                }
                this.$router.push({
                    name: 'home_index'
                });
            } else {
                console.log(222222);
            }
        }
    },
    created() {}
};
</script>

<style>
</style>
