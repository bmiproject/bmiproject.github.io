<template>
    <section id="hero-section">
        <v-row no-gutters>
            <v-img
                src="../../../assets/ecommerce/hero.jpg"
            >
                <v-theme-provider dark>
                    <v-container fill-height>
                        <v-row
                            align="center"
                            class="white--text mx-auto"
                            justify="center"
                        >
                            <v-col
                                class="white--text text-center "
                                cols="12"
                                tag="h1"
                            >
                                <span
                                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                                    class="font-weight-light"
                                >
                                    Find and Hire Us for any job, online
                                </span>
                                <p class="mt-2 font-weight-light mx-auto text-white" style="max-width: 900px">
                                    Thousands of people hire us to turn their ideas into reality.
                                </p>

                                <v-responsive class="no-flex mx-auto" max-width="460px">
                                    <v-text-field 
                                        placeholder="What skill are you looking for" 
                                        light 
                                        filled 
                                        background-color="#fff"
                                        width="400px"
                                        height="50px"
                                        hide-details
                                        outlined
                                    >
                                        <template slot="append" >
                                            <v-btn
                                                class="mt-n5 mr-n3"
                                                tile
                                                color="primary"
                                                height="60px"
                                                width="54px"
                                                depressed
                                            >
                                                <v-icon>mdi-magnify</v-icon>
                                            </v-btn>
                                        </template>
                                    </v-text-field>
                                </v-responsive>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-theme-provider>
            </v-img>
        </v-row>
    </section>
</template>
<script>
export default {
    name: 'hero-section'
}
</script>
<style scoped>
    p { color: #fff; font-size: 24px; line-height: 35px; }
    .v-input__slot { padding-right: 0; }
</style>