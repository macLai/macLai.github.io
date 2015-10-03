(function($) {
  $(function() {

    // Floating-Fixed table of contents
    if ($('nav').length) {
      $('.toc-wrapper').pushpin({
        top: $('nav').height()
      });
    } else if ($('#index-banner').length) {
      $('.toc-wrapper').pushpin({
        top: $('#index-banner').height()
      });
    } else {
      $('.toc-wrapper').pushpin({
        top: 0
      });
    }

    //site's table of contents
    exampleLi = document.createElement("li");
    exampleHeadDiv = document.createElement("div");
    exampleHeadDiv.setAttribute("class", "collapsible-header");
    exampleHeadA = document.createElement("a");
    exampleHeadA.setAttribute("class", "collapsible-header");
    exampleBody = document.createElement("div");
    exampleBody.setAttribute("class", "collapsible-body");
    // exampleLi.appendChild(exampleHead);

    exampleUl = document.createElement("ul");
    exampleUl.setAttribute("class", "collapsible");
    exampleUl.setAttribute("data-collapsible", "accordion");

    navi = document.getElementById("navi");
    children = navi.children;
    child_len = children.length;
    for(i = 0; i < child_len; i++)
    {
      target = document.getElementsByName("top")[0];
      subchild = exampleLi.cloneNode(true);
      // target.appendChild(subchild);
      path_list = children[i].id.split('/');
      path_len = path_list.length - 1;
      for(j = 0; j < path_len; j++)
      {
        temp_child = document.getElementsByName(path_list[j]);
        for(k = 0; k < temp_child.length; k++)
        {
          if( temp_child[k].parentNode.parentNode.getAttribute("name") === target.getAttribute("name") )
          {
            target = temp_child[k].nextNode();
            break;
          }
        }
        if( k === temp_child.length )
        {
          temp_node = exampleLi.cloneNode(true);
          target.appendChild(temp_node);
          target = temp_node;
          temp_node = exampleHeadDiv.cloneNode(true);
          target.appendChild(temp_node);
          target = temp_node;
          target.setAttribute("name", path_list[j]);
          target.textContent = path_list[j];
          temp_node = exampleBody.cloneNode(true);
          target.parentNode.appendChild(temp_node);
          target = temp_node;

          temp_node = exampleUl.cloneNode(true);
          target.appendChild(temp_node);
          target = temp_node;
        }
      }
      temp_node = exampleLi.cloneNode(true);
      target.appendChild(temp_node);
      target = temp_node;
      temp_node = exampleHeadA.cloneNode(true);
      target.appendChild(temp_node);
      target = temp_node;
      target.textContent = children[i].textContent;
      target.setAttribute("href", children[i].getAttribute("href"));
    }


    $('.button-collapse').sideNav();


  }); // end of document ready
})(jQuery); // end of jQuery name space
