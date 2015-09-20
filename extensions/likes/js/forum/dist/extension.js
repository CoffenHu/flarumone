System.register("likes/addLikeAction",["flarum/extend","flarum/app","flarum/components/Button","flarum/components/CommentPost"],function(t){"use strict";var e,n,o,i;return{setters:[function(t){e=t.extend},function(t){n=t["default"]},function(t){o=t["default"]},function(t){i=t["default"]}],execute:function(){t("default",function(){e(i.prototype,"actionItems",function(t){var e=this.props.post;if(!e.isHidden()&&e.canLike()){var i=n.session.user&&e.likes().some(function(t){return t===n.session.user});t.add("like",o.component({children:n.trans(i?"likes.unlike_action":"likes.like_action"),className:"Button Button--link",onclick:function(){i=!i,e.save({isLiked:i});var t=e.data.relationships.likes.data;t.some(function(e,o){return e.id===n.session.user.id()?(t.splice(o,1),!0):void 0}),i&&t.unshift({type:"users",id:n.session.user.id()})}}))}})})}}}),System.register("likes/addLikesList",["flarum/extend","flarum/app","flarum/components/CommentPost","flarum/helpers/punctuate","flarum/helpers/username","flarum/helpers/icon","likes/components/PostLikesModal"],function(t){"use strict";var e,n,o,i,r,u,s;return{setters:[function(t){e=t.extend},function(t){n=t["default"]},function(t){o=t["default"]},function(t){i=t["default"]},function(t){r=t["default"]},function(t){u=t["default"]},function(t){s=t["default"]}],execute:function(){t("default",function(){e(o.prototype,"footerItems",function(t){var e=this.props.post,o=e.likes();if(o&&o.length){var a=3,l=o.sort(function(t){return t===n.session.user?-1:1}).slice(0,a).map(function(t){return m("a",{href:n.route.user(t),config:m.route},t===n.session.user?n.trans("likes.you"):r(t))});o.length>a&&l.push(m("a",{href:"#",onclick:function(t){t.preventDefault(),n.modal.show(new s({post:e}))}},n.trans("likes.others",{count:o.length-a}))),t.add("liked",m("div",{className:"Post-likedBy"},u("thumbs-o-up"),n.trans("likes.post_liked_by"+(o[0]===n.session.user?"_self":""),{count:l.length,users:i(l)})))}})})}}}),System.register("likes/main",["flarum/extend","flarum/app","flarum/models/Post","flarum/Model","flarum/components/NotificationGrid","likes/addLikeAction","likes/addLikesList","likes/components/PostLikedNotification"],function(t){"use strict";var e,n,o,i,r,u,s,a;return{setters:[function(t){e=t.extend},function(t){n=t["default"]},function(t){o=t["default"]},function(t){i=t["default"]},function(t){r=t["default"]},function(t){u=t["default"]},function(t){s=t["default"]},function(t){a=t["default"]}],execute:function(){n.notificationComponents.postLiked=a,o.prototype.canLike=i.attribute("canLike"),o.prototype.likes=i.hasMany("likes"),u(),s(),e(r.prototype,"notificationTypes",function(t){t.add("postLiked",{name:"postLiked",icon:"thumbs-o-up",label:n.trans("likes.notify_post_liked")})})}}}),System.register("likes/components/PostLikedNotification",["flarum/components/Notification","flarum/helpers/username","flarum/helpers/punctuate"],function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o,i,r,u,s=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=function(t,e,n){for(var o=!0;o;){var i=t,r=e,u=n;s=l=a=void 0,o=!1,null===i&&(i=Function.prototype);var s=Object.getOwnPropertyDescriptor(i,r);if(void 0!==s){if("value"in s)return s.value;var a=s.get;return void 0===a?void 0:a.call(u)}var l=Object.getPrototypeOf(i);if(null===l)return void 0;t=l,e=r,n=u,o=!0}};return{setters:[function(t){o=t["default"]},function(t){i=t["default"]},function(t){r=t["default"]}],execute:function(){u=function(t){function o(){e(this,o),a(Object.getPrototypeOf(o.prototype),"constructor",this).apply(this,arguments)}return n(o,t),s(o,[{key:"icon",value:function(){return"thumbs-o-up"}},{key:"href",value:function(){return app.route.post(this.props.notification.subject())}},{key:"content",value:function(){var t=this.props.notification,e=t.sender(),n=t.additionalUnreadCount();return app.trans("likes.post_liked_notification",{user:e,username:n?r([i(e),app.trans("likes.others",{count:n})]):void 0})}},{key:"excerpt",value:function(){return this.props.notification.subject().contentPlain()}}]),o}(o),t("default",u)}}}),System.register("likes/components/PostLikesModal",["flarum/components/Modal","flarum/helpers/avatar","flarum/helpers/username"],function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o,i,r,u,s=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=function(t,e,n){for(var o=!0;o;){var i=t,r=e,u=n;s=l=a=void 0,o=!1,null===i&&(i=Function.prototype);var s=Object.getOwnPropertyDescriptor(i,r);if(void 0!==s){if("value"in s)return s.value;var a=s.get;return void 0===a?void 0:a.call(u)}var l=Object.getPrototypeOf(i);if(null===l)return void 0;t=l,e=r,n=u,o=!0}};return{setters:[function(t){o=t["default"]},function(t){i=t["default"]},function(t){r=t["default"]}],execute:function(){u=function(t){function o(){e(this,o),a(Object.getPrototypeOf(o.prototype),"constructor",this).apply(this,arguments)}return n(o,t),s(o,[{key:"className",value:function(){return"PostLikesModal Modal--small"}},{key:"title",value:function(){return app.trans("likes.post_likes_modal_title")}},{key:"content",value:function(){return m("div",{className:"Modal-body"},m("ul",{className:"PostLikesModal-list"},this.props.post.likes().map(function(t){return m("li",null,m("a",{href:app.route.user(t),config:m.route},i(t)," ",r(t)))})))}}]),o}(o),t("default",u)}}});