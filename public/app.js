$(document).ready(function() {

  $(document).keyup(function(e){
    if(e.keyCode == 27){
      remove_helper_text();      
      }
  });

  $(".description_link").on ( 'click', function(e){
    var helper_text = $(this).attr('data-description');
    show_description(helper_text);

  });

  $(".helper_text_close_button").on ( 'click', function(){
    remove_helper_text();
  });

  $(".simple_with_drop").sortable({
    connectWith: ".simple_with_no_drag",
    stop: function(event, ui) {
      var container_element, container_element_bg_color, h2color, li_item_data_type, target_li_data_type, ui_item, item_description;
      li_item_data_type = ui.item.attr("data-type");
      target_li_data_type = ui.item.parent().attr("data-type");
      container_element = ui.item.parent().parent().attr("class");
      container_element_bg_color = ui.item.parent().parent().css("background-color");
      h2color = ui.item.parent().parent().children("h2").css("color");
      container_element = "." + container_element;
      ui_item = ui.item;
      if (li_item_data_type === target_li_data_type) {
        right_place_animation(ui_item, container_element, container_element_bg_color, h2color);
        remaining_questions_counters();
      } else if (li_item_data_type !== target_li_data_type && target_li_data_type !== "Questions") {
        var helper_text = ui_item.find('span.helper').attr('data-type');
        show_description(helper_text);
        return false;
      } else {
        return false;
      }
    }
  });
  $(".simple_with_no_drag").sortable({
    drag: false,
    items: '.simple_with_no_drag:not'
  });

  right_place_animation = function(ui_item, container_element, container_element_bg_color, h2color) {
    ui_item.removeClass("item").addClass("sorted_item");
    $(container_element).animate({
      backgroundColor: "#00C82B"
    }, 10, function() {
      $(container_element).animate({
        backgroundColor: container_element_bg_color
      });
    });
  };

  show_description = function(helper_text) {
    $(".helper_text p").remove();

    $(".helper_text").prepend("<p>" + helper_text + "</p>");
    $(".helper_text").css('visibility', 'visible');
  };

  remove_helper_text = function(){
    $("helper_text p").remove();
    $(".helper_text").css('visibility', 'hidden');
  };

  remaining_questions_counters = function(){
    var num_el = $(".simple_with_drop li").size();    
    if (num_el == 0){
      var helper_text = "Congradulations, You have finished this test. If you want to take test again just refresh the page. If you want to stay in the page just click 'Got It!'";
      $(".helper_text").css("background-color", " #90C590");
      $(".left_container").hide();
      $(".right_container").css("width", "100vw");
      $(".box_container").css("width", "100vw");
      $(".left_box").css("width", "45vw");
      $(".right_box").css("width", "55vw");
      show_description(helper_text);
    };
  };
});
