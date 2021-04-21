import Vue from "vue";


// UI
import appButton from "@/components/UI/Controls/Button.vue";
import appInput from "@/components/UI/Controls/Input.vue";
import appTextArea from "@/components/UI/Controls/TextArea.vue";
import Message from "@/components/UI/Message.vue";

// Components
import Intro from "@/components/UI/Intro.vue";

// Blog
import PostsList from "@/components/Blog/PostsList.vue";

Vue.component("PostsList", PostsList);
Vue.component("Intro", Intro);
Vue.component("appButton", appButton);
Vue.component("appInput", appInput);
Vue.component("appTextArea", appTextArea);
Vue.component("Message", Message);
