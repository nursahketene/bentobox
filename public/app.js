$(document).ready(function() {
  var right_place_animation, wrong_place_animation, show_description;

  $(document).click(function(){
    var check_helper_text = $("body").find(".helper_text");
    check_length = check_helper_text.length;
    if(check_length > 0){
      
      //remove_description();
    }else{
    }
  });

  $(".helper_icon").click(function(){
    var node = document.createElement("div");
    var textnode = document.createTextNode("TEXT");
    node.appendChild(textnode);
    node.className = "helper_text";
    document.getElementsByTagName("body")[0].appendChild(node);
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
      } else if (li_item_data_type !== target_li_data_type && target_li_data_type !== "Questions") {
        wrong_place_animation(container_element, container_element_bg_color, h2color, ui_item );
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
  wrong_place_animation = function(container_element, container_element_bg_color, h2color, ui_item) {
    $(container_element).animate({
      color: h2color,
      backgroundColor: "#FF6666"
    }, 10, function() {
      $(container_element).animate({
        color: h2color,
        backgroundColor: container_element_bg_color,
      });
      show_description(ui_item);
    });
  };

  show_description = function(ui_item) {
    var helper_text = $.trim(ui_item.find('span.helper').text());
    $("body").append("<div class='helper_text'>" + helper_text + "</div>");
  };

  remove_description = function(){
    $(".helper_text").remove().delay(1000);
  };
});
