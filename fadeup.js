// �����̂��������ƂȂ�A�j���[�V�����̖��O���`
function fadeAnime(){

	// �ӂ��
	$('.fadeUpTrigger').each(function(){ //fadeUpTrigger�Ƃ����N���X����
		var elemPos = $(this).offset().top-50;//�v�f���A50px���
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeUp');// ��ʓ��ɓ�������fadeUp�Ƃ����N���X����ǋL
		}else{
		$(this).removeClass('fadeUp');// ��ʊO�ɏo����fadeUp�Ƃ����N���X�����O��
		}
		});
}

// ��ʂ��X�N���[���������瓮���������ꍇ�̋L�q
	$(window).scroll(function (){
		fadeAnime();/* �A�j���[�V�����p�̊֐����Ă�*/
	});// �����܂ŉ�ʂ��X�N���[���������瓮���������ꍇ�̋L�q

// ��ʂ��ǂݍ��܂ꂽ�炷���ɓ����������ꍇ�̋L�q
	$(window).on('load', function(){
		fadeAnime();/* �A�j���[�V�����p�̊֐����Ă�*/
	});// �����܂ŉ�ʂ��ǂݍ��܂ꂽ�炷���ɓ����������ꍇ�̋L�q


