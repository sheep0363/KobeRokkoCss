//�摜�̐ݒ�

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [//PC�p�̉摜
				{ src: 'https://sheep0363.github.io/KobeRokkoCss/cover_01.jpg' },
				{ src: 'https://sheep0363.github.io/KobeRokkoCss/cover_02.jpg' }
			];
		} else {
			var responsiveImage = [//�^�u���b�g�T�C�Y�i768px�j�ȉ��p�̉摜
				{ src: 'https://sheep0363.github.io/KobeRokkoCss/cover_01h.jpg' },
				{ src: 'https://sheep0363.github.io/KobeRokkoCss/cover_02h.jpg' }
			];
		}

//Vegas�S�̂̐ݒ�

$('#slider').vegas({
		overlay: '/js/vegas/dist/overlays/06.png',//�摜�̏�ɖԐ���h�b�g�̃I�[�o�[���C�p�^�[���摜���w��B
		transition: 'blur',//�؂�ւ��̃A�j���[�V�����Bhttp://vegas.jaysalvat.com/documentation/transitions/�Q�ƁBfade�Afade2�AslideLeft�AslideLeft2�AslideRight�AslideRight2�AslideUp�AslideUp2�AslideDown�AslideDown2�AzoomIn�AzoomIn2�AzoomOut�AzoomOut2�AswirlLeft�AswirlLeft2�AswirlRight�AswirlRight2�Aburnburn2�Ablurblur2�Aflash�Aflash2���ݒ�\�B
		transitionDuration: 2000,//�؂�ւ��̃A�j���[�V�������Ԃ��~���b�P�ʂŐݒ�
		firstTransitionDuration: 10,
		delay: 10000,//�X���C�h�Ԃ̒x�����~���b�P�ʂŁB
		animationDuration: 10000,//�X���C�h�A�j���[�V�������Ԃ��~���b�P�ʂŐݒ�
		slides: responsiveImage//�摜�ݒ��ǂ�
	});