export default function isWeChat() {
    return navigator.userAgent.indexOf('MicroMessenger') > -1
}