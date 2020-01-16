/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */
var __awaiter=this&&this.__awaiter||function(e,t,a,o){return new(a||(a=Promise))((function(r,n){function i(e){try{c(o.next(e))}catch(e){n(e)}}function s(e){try{c(o.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,s)}c((o=o.apply(e,t||[])).next())}))};define(["require","exports","jquery","TYPO3/CMS/Core/Ajax/AjaxRequest"],(function(e,t,a,o){"use strict";let r=new class{constructor(){this.options={containerSelector:"#typo3-permissionList"},this.ajaxUrl=TYPO3.settings.ajaxUrls.user_access_permissions,this.initializeEvents()}setCheck(e,t){if(document.editform[t]){let a=document.editform[t].value;for(let t=1;t<=5;t++)document.editform[e+"["+t+"]"].checked=a&Math.pow(2,t-1)}}checkChange(e,t){let a=0;for(let t=1;t<=5;t++)document.editform[e+"["+t+"]"].checked&&(a|=Math.pow(2,t-1));document.editform[t].value=a|("tx_beuser_system_beusertxpermission[check][perms_user]"===e?1:0),this.setCheck(e,t)}setPermissions(e){let t=e.data("page"),r=e.data("who"),n="#"+t+"_"+r;new o(this.ajaxUrl).post({page:t,who:r,permissions:e.data("permissions"),mode:e.data("mode"),bits:e.data("bits")}).then(e=>__awaiter(this,void 0,void 0,(function*(){const t=yield e.resolve();a(n).replaceWith(t),a(n).find("span").tooltip()})))}toggleEditLock(e){let t=e.data("page");new o(this.ajaxUrl).post({action:"toggle_edit_lock",page:t,editLockState:e.data("lockstate")}).then(e=>__awaiter(this,void 0,void 0,(function*(){a("#el_"+t).replaceWith(yield e.resolve())})))}changeOwner(e){let t=e.data("page");new o(this.ajaxUrl).post({action:"change_owner",page:t,ownerUid:e.data("owner"),newOwnerUid:a("#new_page_owner").val()}).then(e=>__awaiter(this,void 0,void 0,(function*(){a("#o_"+t).replaceWith(yield e.resolve())})))}showChangeOwnerSelector(e){let t=e.data("page");new o(this.ajaxUrl).post({action:"show_change_owner_selector",page:t,ownerUid:e.data("owner"),username:e.data("username")}).then(e=>__awaiter(this,void 0,void 0,(function*(){a("#o_"+t).replaceWith(yield e.resolve())})))}restoreOwner(e){let t=e.data("page"),o=e.data("username"),r=o;void 0===o&&(r=(o=a("<span>",{class:"not_set",text:"[not set]"})).html(),o=o.text());let n=a("<span/>",{id:"o_"+t}),i=a("<a/>",{class:"ug_selector changeowner","data-page":t,"data-owner":e.data("owner"),"data-username":r,text:o});n.append(i),a("#o_"+t).replaceWith(n)}changeGroup(e){let t=e.data("page");new o(this.ajaxUrl).post({action:"change_group",page:t,groupUid:e.data("groupId"),newGroupUid:a("#new_page_group").val()}).then(e=>__awaiter(this,void 0,void 0,(function*(){a("#g_"+t).replaceWith(yield e.resolve())})))}showChangeGroupSelector(e){let t=e.data("page");new o(this.ajaxUrl).post({action:"show_change_group_selector",page:t,groupUid:e.data("groupId"),groupname:e.data("groupname")}).then(e=>__awaiter(this,void 0,void 0,(function*(){a("#g_"+t).replaceWith(yield e.resolve())})))}restoreGroup(e){let t=e.data("page"),o=e.data("groupname"),r=o;void 0===o&&(r=(o=a("<span>",{class:"not_set",text:"[not set]"})).html(),o=o.text());let n=a("<span/>",{id:"g_"+t}),i=a("<a/>",{class:"ug_selector changegroup","data-page":t,"data-group":e.data("groupId"),"data-groupname":r,text:o});n.append(i),a("#g_"+t).replaceWith(n)}initializeEvents(){a(this.options.containerSelector).on("click",".change-permission",e=>{e.preventDefault(),this.setPermissions(a(e.currentTarget))}).on("click",".editlock",e=>{e.preventDefault(),this.toggleEditLock(a(e.currentTarget))}).on("click",".changeowner",e=>{e.preventDefault(),this.showChangeOwnerSelector(a(e.currentTarget))}).on("click",".changegroup",e=>{e.preventDefault(),this.showChangeGroupSelector(a(e.currentTarget))}).on("click",".restoreowner",e=>{e.preventDefault(),this.restoreOwner(a(e.currentTarget))}).on("click",".saveowner",e=>{e.preventDefault(),this.changeOwner(a(e.currentTarget))}).on("click",".restoregroup",e=>{e.preventDefault(),this.restoreGroup(a(e.currentTarget))}).on("click",".savegroup",e=>{e.preventDefault(),this.changeGroup(a(e.currentTarget))})}};return TYPO3.Permissions=r,r}));