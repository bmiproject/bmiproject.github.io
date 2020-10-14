<template>
    <div id="sections">
        <div
            class="sections-wrapper py-10"
            v-for="(item, index) in servicesRow"
            :key="index"
            :style="'background: ' + (item.bgColor ? item.bgColor : '#FFFFFF')"
        >
            <v-responsive 
                max-width="1300px"
                class="no-flex mx-auto"
            >
                <v-row>
                    <v-col md="6" v-if="item.layout == 'image-left'">
                        <v-img 
                            :src="item.image"
                            eager
                            contain
                        ></v-img>
                    </v-col>
                    <v-col md="6">
                        <v-card
                            tile
                            elevation="0"
                            color="transparent"
                        >
                            <v-card-title class="mt-10">
                                <h2 class="mb-3" v-html="item.title"></h2>
                            </v-card-title>
                            <v-card-subtitle v-if="item.subtitle">
                                <h4 class="mb-3 black--text" v-html="item.subtitle"></h4>
                            </v-card-subtitle>
                            <v-card-text v-if="item.content">
                                <p v-html="item.content"></p>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn
                                    text
                                    color="primary"
                                    style="font-size: 16px"
                                >
                                    {{ item.btnLabel }} <v-icon right small>mdi-open-in-new</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col md="6" v-if="item.layout == 'image-right'">
                        <v-img 
                            :src="item.image"
                            eager
                            contain
                        ></v-img>
                    </v-col>
                </v-row>
            </v-responsive>
        </div>
    </div>
    
</template>
<script>
export default {
    name: 'services',
    data: () => ({
        servicesRow: [
            { bgColor: "#F5F5F5", image: require('../../assets/service1.png'), layout: 'image-right', title: "Ecommerce Store", subtitle: "Services pellentesque pharetra morbi mi at massa in ac a vitae", content: "Pellentesque tempus hendrerit nisi lobortis quam sit ipsum fermentum. Enim sagittis, proin sed amet dignissim. Lacus lacinia vulputate fermentum amet, turpis sit at massa leo. Risus sed aenean sed molestie eleifend. Venenatis facilisi purus viverra etiam facilisi. Imperdiet ullamcorper mattis molestie orci, elementum arcu. <br> <br> Mattis pellentesque etiam urna, aliquet nunc tempor, aliquam faucibus. Habitant tempor odio donec id eu blandit magna. Sed posuere pellentesque praesent fringilla pellentesque scelerisque amet. Consequat habitasse arcu sed et integer quam pulvinar purus.", btnLabel: "Go to our Ecommerce Store" },

            { bgColor: "#E5E5E5", image: require('../../assets/service2.png'), layout: 'image-left', title: "TFP Job Listings", content: "Pellentesque tempus hendrerit nisi lobortis quam sit ipsum fermentum. Enim sagittis, proin sed amet dignissim. Lacus lacinia vulputate fermentum amet, turpis sit at massa leo. Risus sed aenean sed molestie eleifend. Venenatis facilisi purus viverra etiam facilisi. Imperdiet ullamcorper mattis molestie orci, elementum arcu.", btnLabel: "Check Our Job Listings" },

            { bgColor: "#F5F5F5", image: require('../../assets/service3.png'), layout: 'image-right', title: "Business Community", subtitle: "Blogging Platform for the Business Owners/ Clients", content: "Lorem ipsum non, penatibus fames malesuada aliquet egestas pellentesque. Sed tellus vel facilisis urna sit volutpat justo nullam. Vivamus viverra faucibus pharetra eu pharetra, rutrum sit etiam tortor. <br><br> Pharetra blandit risus, risus lorem eros, aliquam leo et. Vel platea est aliquam tortor, dui mauris eget tincidunt. Integer ullamcorper et turpis risus id vestibulum.", btnLabel: "See our community" },

            { bgColor: "#EAEAEA", image: require('../../assets/service4.png'), layout: 'image-left', title: "Our Weekly Webinars", subtitle: "Business owners/ clients can create/ schedule a webinar", content: "Consequat dolor, sed adipiscing dignissim a risus sagittis malesuada. Turpis ac scelerisque lectus pellentesque. Eu tortor quam nibh sit nulla id sed porta. Non arcu, at urna morbi. Porttitor tempus eget aliquam ornare ut at.", btnLabel: "See our weekly webinars" },
        ]
    })
}
</script>
<style scoped>
    h2, h4 {
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        letter-spacing: -0.01em;
    }
    h2 {
        font-size: 48px;
        line-height: 56px;
    }
    h4 {
        font-size: 30px;
        line-height: 35px;
    }
</style>