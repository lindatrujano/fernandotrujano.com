$(document).ready(function(){
  $('#menu').stickThis()
  $(document).scroll(function(e){
    var scrollPos = $(document).scrollTop()+50
    var sections = $('body > section'),
        i, len, section;
    for (i=1, len = sections.length; i<len; i++){
      section = $(sections[i])
      sectionPos = section.offset().top
      if (scrollPos > sectionPos && (sections.length  === i+1 || $(sections[i+1]).offset().top >= scrollPos)){
        $('#menu.cloned > a').removeClass('selected')
        $('#menu.cloned > a[href=#'+section.attr('id')+']').addClass('selected')
        return
      }
    }
  })

  $('#menu > a').click(function(e){
    e.preventDefault()
    var section = $(this).attr('href'),
        newPos  = $(section).offset().top

    $('body').animate({
      'scrollTop' : newPos + "px"
    }, 700)

  })
})
