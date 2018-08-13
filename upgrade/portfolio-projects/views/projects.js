<%- include("../../../../important/admin/views/_layouts/adminheader") %>
    <h2 class="admin-page__main-title">portfolio projects</h2>
    <% include ../../../../important/admin/views/_layouts/messages/messages %>
        <button class="admin-button admin-button--add-something">
            <a  href="/admin/portfolio/add-project">+</a>
        </button>
    <br>
    <br>
    <% if(count < 1){ %>
        <h3 class="admin-page__none-of-something">There are no docs right now...</h3>
        <% } else { %>
    <div class="button-row">
        <button class="admin-button admin-button--main">
            <a href="/admin/portfolio/">All Categories</a>
        </button>
<% categories.forEach(function(category){ %>
    
        <button  class="admin-button admin-button--main">
            <a href="/admin/portfolio/sorted/<%= category.slug %>">
                <%= category.title %>
            </a>
        </button>
   
    <% }) %> 
    </div>
        <div class="blocks-holder">
            <% projects.forEach(function(project){ %>
            <div class="admin-blocks" id="id_<%= project._id %>" class="<%= project.slug %>">
            <a href="/admin/portfolio/edit-project/<%= project._id %>">
            <h4>
                title:
            </h4>
                    <h5>
                        <%= project.title %>
                    </h5>
                    <h4>
                category:
            </h4>
                    <h5>
                        <%= project.category %>
                    </h5>
                    <h4>
                        image:
                    </h4>
                    <img src="/portfolio_images/<%= project._id %>/<%= project.image %>">
                    <h4>
                        description:
                    </h4>
                    <h5>
                        <%= project.description %>
                    </h5>
                    <form class="admin-blocks__delete-stuffs" method="post" action="/admin/portfolio/delete-project/<%= project._id %>?_method=DELETE">
                                <input type="hidden" name="_method" value="DELETE">
                                <button type="submit">Delete</button>
                    </form>
                    </a>
               </div>
            <% }) %>
    </div>
    <% } %>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
    <script>
        $('.blocks-holder').sortable({
            items: "div",
            update: function () {
                let ids = $(".blocks-holder").sortable("serialize");
                let url = "/admin/portfolio/reorder-projects";
                $.post(url, ids);
            }
        }, "refresh");
    </script>

    <%- include("../../../../important/admin/views/_layouts/adminfooter") %>
