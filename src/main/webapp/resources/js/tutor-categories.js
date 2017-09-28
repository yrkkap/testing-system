var data = {
    newCategoryTitle: "",
    openToAll: false
};

var controller = {
    createNewCategory: function (event, model) {
        var postData = {
            categoryTitle: data.newCategoryTitle,
            openToAll: data.openToAll,
            action: "CREATE"
        };

        $.post("/tutor/category", postData).done(function () {
            location.reload();
        });
    },

    deleteCategory: function (event, model) {
        var id = event.target.dataset.categoryId;

        $.post("/tutor/category", {action: "DELETE", categoryId: id})
            .done(function () {
                location.reload();
            });

    }
}

rivets.bind($("#tutor-categories"), {
    data: data,
    controller: controller
});
