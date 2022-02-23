export default function getKernel() {
    const userAgent = navigator.userAgent;
    return {
        triendt: userAgent.indexOf('Trident') > -1,
        presto: userAgent.indexOf('Presto') > -1,
        webkit: userAgent.indexOf('AppleWebkit') > -1,
        gecko: userAgent.indexOf('Gecko') > -1 && userAgent.indexOf('KHTML') === -1,
        ios: !!userAgent.match(/\(i[^;]+;(u;)?CPU.+Mac OS X/),
        android: userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1,
    };
}
