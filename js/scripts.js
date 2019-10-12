$(function() {
    var $profile=$('.profile');
    var $top=$('.top');
    var $work=$('.works');
    var $mail=$('.mail');
    var $projectImage=$('.box-list img');
    //work
    var workFlag=0;
    //work tonext
    var $nextBtn=$('.rightArrow');
    var nextSrc;
    var nextTitle;
    var nextTool;
    var thisList;
//function area
    function top_showhide(){
        if($top.css('display')!='none'){
            $top.hide();
        }
    }
    function profile_showhide(){
        if($profile.css('display')!='none'){
            $profile.hide();
        }
    }

    function work_showhide(){
        if($work.css('display')!='none'){
            $work.hide();
        }
    }

    function mail_showhide(){
        if($mail.css('display')!='none'){
            $mail.hide();
        }
    }
//function area


//切り替え部分開始
    $('#menu-profile').click(function(){
        $('#menu-work').removeClass('work-select');
        $('#menu-mail').removeClass('mail-select');
        $(this).addClass('profile-select');
        if($top.css('display')!='none'){
            $top.fadeOut(200);
        }
       work_showhide();
       mail_showhide();
       $profile.fadeIn(1000);
    });

    $('#menu-work').click(function(){
        $('#menu-profile').removeClass('profile-select');
        $('#menu-mail').removeClass('mail-select');
        $(this).addClass('work-select');
        profile_showhide();
        top_showhide();
        mail_showhide();
        $work.fadeIn(900);
        if(workFlag!=0){
            $('.projectDetails').hide();
            $('.box-list').hide().fadeIn(900);
            workFlag=0;
        }
    });

    $('#menu-mail').click(function(){
        $('#menu-profile').removeClass('profile-select');
        $('#menu-work').removeClass('work-select');
        $(this).addClass('mail-select');
        work_showhide();
        profile_showhide();
        top_showhide();
        $mail.fadeIn(900);

    });

    $('.logo').click(function(){
        $('#menu-profile').removeClass('profile-select');
        $('#menu-work').removeClass('work-select');
        $('#menu-mail').removeClass('mail-select');
       profile_showhide();
       work_showhide();
       mail_showhide();
       $top.fadeIn(900);
    });



//切り替え部分終了

//work
//詳細ページのオンオフ
$projectImage.click(function(){
    var src = $(this).attr('src');
    var title=$(this).attr('alt');
    var tool = $(this).data('tool');
     thisList=$(this).parent().parent();//選択した画像の先祖要素のリスト
     nextSrc=thisList.next().find('img').attr('src');
     nextTitle=thisList.next().find('img').attr('alt');
     nextTool=thisList.next().find('img').data('tool');
     
    if(workFlag!=1){
        $('.box-list').hide();
        $('.projectDetails').hide().fadeIn(900);
        workFlag=1;
    }
    $('.projectDetails').find('.project-image').attr('src',src);
    $('.projectDetails').find('.project-title').text(title);
    $('.projectDetails').find('.tool').text(tool);
    $('.projectDetails').find('.nextTitle').text(nextTitle);
});
//次の詳細ページへ
$nextBtn.click(function(){
    $('.projectDetails').find('.project-image').attr('src',nextSrc);
    $('.projectDetails').find('.project-title').text(nextTitle);
    $('.projectDetails').find('.tool').text(nextTool);
    thisList=$('.img02').parent().parent();//選択した画像の先祖要素のリスト
    nextSrc=thisList.next().find('img').attr('src');
    nextTitle=thisList.next().find('img').attr('alt');
    nextTool=thisList.next().find('img').data('tool');
    $work.hide().fadeIn(900);
});

    
  });