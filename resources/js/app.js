import { createApp } from "vue";
import App from './components/App';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret, faRss,faRssSquare, faLink, faMusic, faAppleWhole, faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faUserSecret, faRss, faRssSquare, faLink, faMusic, faAppleWhole, faSearch)


const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
