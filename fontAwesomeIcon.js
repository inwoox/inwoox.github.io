import Vue from 'vue';

// 설치했던 fontawesome-svg-core와 vue-fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// 아이콘 추가
import { faLink, faRedo, faUndo, faProjectDiagram, faHome, faCheck, faSplotch, faUser, faBlog, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt, faAddressCard, faSmile, faKeyboard } from '@fortawesome/free-regular-svg-icons';
import { faYoutube, faPiedPiper, faGithub, faConnectdevelop } from '@fortawesome/free-brands-svg-icons';

// 사용할 때는 앞에 fa를 제외하고, <font-awesome-icon :icon="['fab','youtube']"/> 처럼 사용한다
library.add(faLink, faRedo, faUndo, faTrashAlt, faYoutube, faAddressCard, faPiedPiper, faGithub, 
  faConnectdevelop, faProjectDiagram, faHome, faSmile, faKeyboard, faCheck, faSplotch,
  faUser, faBlog, faChalkboardTeacher);

// fontawesome아이콘을 Vue탬플릿에 사용할 수 있게 등록해 줍니다.
Vue.component("font-awesome-icon", FontAwesomeIcon);