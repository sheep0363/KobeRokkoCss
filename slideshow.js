//�摜�̐ݒ�

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [//PC�p�̉摜
				{ src: 'https://sheep0363.github.io/KobeRokkoCss/2090014_l2.jpg'},
				{ src: 'https://sheep0363.github.io/KobeRokkoCss/2090014_l2.jpg'},
				{ src: 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-3/img/img_03.jpg'}
			];
		} else {
			var responsiveImage = [//�^�u���b�g�T�C�Y�i768px�j�ȉ��p�̉摜
				{ src: 'https://sheep0363.github.io/KobeRokkoCss/2090014_l2.jpg' },
				{ src: 'https://sheep0363.github.io/KobeRokkoCss/2090014_l2.jpg' },
				{ src: 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-3/img/img_sp_03.jpg' }
			];
		}

//Vegas�S�̂̐ݒ�

$('#slider').vegas({
		overlay: true,//�摜�̏�ɖԐ���h�b�g�̃I�[�o�[���C�p�^�[���摜���w��B
		transition: 'blur',//�؂�ւ��̃A�j���[�V�����Bhttp://vegas.jaysalvat.com/documentation/transitions/�Q�ƁBfade�Afade2�AslideLeft�AslideLeft2�AslideRight�AslideRight2�AslideUp�AslideUp2�AslideDown�AslideDown2�AzoomIn�AzoomIn2�AzoomOut�AzoomOut2�AswirlLeft�AswirlLeft2�AswirlRight�AswirlRight2�Aburnburn2�Ablurblur2�Aflash�Aflash2���ݒ�\�B
		transitionDuration: 2000,//�؂�ւ��̃A�j���[�V�������Ԃ��~���b�P�ʂŐݒ�
		delay: 10000,//�X���C�h�Ԃ̒x�����~���b�P�ʂŁB
		animationDuration: 20000,//�X���C�h�A�j���[�V�������Ԃ��~���b�P�ʂŐݒ�
		animation: 'kenburns',//�X���C�h�A�j���[�V�����̎�ށBhttp://vegas.jaysalvat.com/documentation/transitions/�Q�ƁBkenburns�AkenburnsUp�AkenburnsDown�AkenburnsRight�AkenburnsLeft�AkenburnsUpLeft�AkenburnsUpRight�AkenburnsDownLeft�AkenburnsDownRight�Arandom���ݒ�\�B
		slides: responsiveImage,//�摜�ݒ��ǂ�
	});