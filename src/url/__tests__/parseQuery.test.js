import { expect } from 'chai';
import parseQuery from '../parseQuery';

describe('#parseQuery', function() {
    var urls = {
        google: 'https://www.google.com/search?ei=j5h4XN7GLrvKmAWejoiwDA&q=google&oq=google&gs_l=psy-ab.3..35i39l2j0i203l8.7974281.7975556..7975825...0.0..0.180.1056.0j6......0....1..gws-wiz.......0j0i67.slVrKMYhxq4',
        baidu: 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=baidu&oq=%25E6%2597%25A5%25E5%258E%2586&rsv_pq=ff5ddfd50000703b&rsv_t=65a2UeiQrYX2FoUhAAUZb%2BZUDMR%2Bog6mUERGVLsfspPfmJvxD687%2FhyC58c&rqlang=cn&rsv_enter=1&rsv_sug3=19&rsv_sug1=5&rsv_sug7=100&rsv_sug2=0&inputT=3450&rsv_sug4=3973',
    };

    it('#url1', function() {
        expect(parseQuery(urls.google)).to.include.any.keys('oq', 'gs_l');
    });
    it('#url2', function() {
        expect(parseQuery(urls.baidu)).to.include.any.keys('rsv_pq', 'inputT');
    });
});
