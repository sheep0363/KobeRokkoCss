//画像の設定

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [//PC用の画像
				{ src: 'https://sheep0363.github.io/KobeRokkoCss/cover_01.jpg' },
				{ src: 'https://sheep0363.github.io/KobeRokkoCss/cover_02.jpg' }
			];
		} else {
			var responsiveImage = [//タブレットサイズ（768px）以下用の画像
				{ src: 'https://sheep0363.github.io/KobeRokkoCss/cover_01h.jpg' },
				{ src: 'https://sheep0363.github.io/KobeRokkoCss/cover_02h.jpg' }
			];
		}

//Vegas全体の設定

$('#slider').vegas({
		overlay: '/js/vegas/dist/overlays/06.png',//画像の上に網線やドットのオーバーレイパターン画像を指定。
		transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
		transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
		firstTransitionDuration: 10,
		delay: 10000,//スライド間の遅延をミリ秒単位で。
		animationDuration: 10000,//スライドアニメーション時間をミリ秒単位で設定
		slides: responsiveImage//画像設定を読む
	});