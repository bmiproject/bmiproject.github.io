<template>
    <section id="information-section">
        <v-responsive
            class="no-flex mx-auto"
            :max-width="containerSize"
        >
            <v-row class="row1">
                <v-col md="5" class="pt-15">
                    <div class="images">
                        <v-img
                            src="../../../assets/ecommerce/info1.png"
                            max-width="580px"
                            class="main-image"
                            contain
                        ></v-img>
                    </div>
                </v-col>
                <v-col md="7" class="text-center" align-self="center">
                    <h3 
                        class="mx-auto mb-5"
                        style="max-width: 625px"
                    >
                        Risus, sapien placerat enim non eget monteshac amet
                    </h3>
                    <p class="mb-10">
                        Malesuada nisi nunc, elementum elit arcu sed et et eu. Bibendum neque ac tristique <br> tempor, ornare ut. In augue ut in eu gravida facilisis. Arcu auctor sed fusce non vitae elit, <br>volutpat commodo, sapien.
                    </p>
                    <v-responsive 
                        class="mx-auto" 
                        max-width="625px"
                    >   
                        <v-row dense>
                            <v-col
                                v-for="(item, index) in categories"
                                :key="index"
                                md="4"
                                class="pr-5"
                            >
                                <v-hover v-slot:default="{ hover }">
                                    <v-btn 
                                        text
                                        color="primary"    
                                        v-html="item.label"
                                        :class="{'mt-3': true, 'hovered': hover }"
                                        width="100%"
                                        large
                                        outlined
                                        tile
                                    ></v-btn>
                                </v-hover>
                            </v-col>
                        </v-row>
                    </v-responsive>
                </v-col>
            </v-row>
        </v-responsive>
    </section>
</template>
<script>
export default {
    name: 'information-section',
    data: () => ({
        categories: [
            { label: "Sales & Marketing" },
            { label: "Accounting" },
            { label: "Writing" },
            { label: "Admin & Support" },
            { label: "Human Resource" },
            { label: "Design" },
            { label: "Development" },
            { label: "Secretarial" },
            { label: "Finance" },
        ]
    })
}
</script>
<style scoped>
    .v-btn { border: 0 none; border-bottom: 1px solid #CCCCCC; transition: 0.5s ease all;}
    .v-btn.hovered { border-color: #BE1E2D !important; }
    .v-btn.hovered:before, .v-btn:focus:before { opacity: 0; }
</style>