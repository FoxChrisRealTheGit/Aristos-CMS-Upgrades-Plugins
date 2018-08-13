<%- include("../../../../important/admin/views/_layouts/adminheader") %>
    <h2 class="admin-page__main-title">add a portfolio project</h2>
    <% include ../../../../important/admin/views/_layouts/messages/errors %>
    <% include ../../../../important/admin/views/_layouts/messages/messages %>
    <button class="admin-button admin-button--add-something"> 
        <a  href="/admin/portfolio">
            <i class="fa fa-hand-point-left"></i>
        </a>
    </button>
    <br>
    <br>

    <form method="post" action="/admin/portfolio/add-project" enctype="multipart/form-data" class="admin-form">

        <%- include ../../../../important/AristosStuff/AristosTextEditor/AristosTextEditor %>
            <div class="admin-form__form-options--bottom-group">
                <div class="admin-form__form-options">
                    <div class="admin-form__group">
                        <label for="">Title</label>
                        <input type="text" class="form-control" name="title" value="<%= title %>" placeholder="Title">

                    </div>
                    
                    <div class="admin-form__group">
                        <label for="">Category</label>
                        <select name="category" id="category" class="form-control">
                            <% categories.forEach(function(category){ %>
                                <option value="<%= category.slug %>">
                                    <%= category.title %>
                                </option>
                                <% }); %>
                        </select>
                    </div>
                    <div class="admin-form__group">
                        <label for="">Author</label>
                        <input type="text" class="form-control" name="author" value="<%= author %>" placeholder="Author">

                    </div>
                    <div class="admin-form__group">
                        <label for="">Image</label>
                        <input type="file" class="form-control" name="image" id="img">
                        <img src="#" id="imgPreview" alt="">
                    </div>

                </div>
                <div class="admin-form__form-options admin-form__form-options--second-group">
                    <div class="admin-form__group">
                        <label for="">Meta Description</label>
                        <textarea class="admin-form--disabled-resize" rows="4" name="description" placeholder="Place a brief description of this blog. Max of 320 characters including spaces."
                            maxlength="320"></textarea>
                    </div>
                    <div class="admin-form__group">
                        <label for="">Meta Keywords</label>
                        <textarea class="admin-form--disabled-resize" rows="4" name="keywords" placeholder="Place your keywords seperated by a comma. Max of 300 characters. EX. neat blog, neater topic, neatest person"
                            maxlength="300"></textarea>
                    </div>
                   
                </div>
            </div>

                <button class="admin-button admin-button--submit">Submit</button>
      
    </form>

    <script>
        function readURL(input) {
            if (input.files && input.files[0]) {
                let reader = new FileReader();

                reader.onload = function (e) {
                    $("#imgPreview").attr("src", e.target.result).width(100).height(100);
                }
                reader.readAsDataURL(input.files[0])
            }
        }

        $("#img").change(function () {
            readURL(this);
        })
       
    </script>
    <%- include("../../../../important/admin/views/_layouts/adminfooter") %>
