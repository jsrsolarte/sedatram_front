import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import "../styles/main.sass"

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#0222e9',
                secondary: '#6b6b6b',
                accent: '#8c9eff',
                error: '#b71c1c',
            },
        },
    },
});
