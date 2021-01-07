<template>
  <v-container>
    <v-row 
        class="text-center"
        justify="center"
    >
       <v-col class="shrink">
            <v-btn
                class="ma-2"
                color="secondary"
                @click="toggleCard"
            >
                {{popupBtnTxt}}
            </v-btn>
            <v-expand-transition>
                    <v-col 
                        cols="12" 
                        v-show="expand" 
                        class="mx-auto"
                    >

                        <p>{{pageInfo}}</p>
                        
                        <v-card
                            class="mx-auto"
                            max-width="450"
                        >
                            <v-img
                                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                height="200px"
                            ></v-img>

                            <v-card-title style="justify-content:center">
                                {{datas.name}}
                            </v-card-title>

                            <v-card-subtitle>
                                <v-list three-line>
                                    <template v-for="(status, index) in datas.status">
                                        <v-list-item :key="index">
                                            <v-list-item-content>
                                                <v-list-item-title >{{ $t(index) }}</v-list-item-title>
                                                <v-list-item-subtitle v-html="datas.status[index]"></v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </template>
                                </v-list>
                            </v-card-subtitle>

                            <v-card-actions>
                                <v-btn
                                    color="orange lighten-2"
                                    text
                                >
                                    Города
                                </v-btn>

                                    <v-spacer></v-spacer>

                                    <v-btn
                                        icon
                                        @click="show = !show"
                                    >
                                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                            </v-card-actions>

                            <v-expand-transition>
                                <div v-show="show">
                                    <v-divider></v-divider>
                                    <v-card-text>
                                        <v-list two-line>
                                            <v-list-item v-for="city in datas.cities" :key="city">
                                                <v-list-item-icon>
                                                    <v-icon color="indigo">
                                                        mdi-map-marker
                                                    </v-icon>
                                                </v-list-item-icon>

                                                <v-list-item-content>
                                                    <v-list-item-title>{{city}}</v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                            <v-divider inset></v-divider>
                                        </v-list>
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
                        </v-card>
                    </v-col>
            </v-expand-transition>
       </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'Popup',
        data: () => ({
            pageInfo: "Popup с информацией о компании 'IT Solutions'",
            show: false,
            expand: false,
            popupBtnTxt: 'Открыть карточку с информацией о компании',
        }),
        mounted() {
            this.getDatas()
        },
        methods: {
            async getDatas() {
                await this.axios.get("https://bitbucket.org/ilakhmotkin/front-end-assesment-ru/raw/525e8e2fbee5cd98a80499c400f569e77b4f6ffd/server-response.json")
                    .then(res => {
                        this.$store.dispatch('setDatasAction', res.data)
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            },
            toggleCard() {
                this.expand = !this.expand
                this.popupBtnTxt = this.expand ? 'Закрыть карточку' : 'Открыть карточку'
            }
        },
        computed: {
            ...mapGetters([
                'datas',
            ])
        }
    }
</script>

<style lang="scss">
</style>