// function addNewCustomer(){
//     let name= $('#name').val();
//     let address= $('#address').val();
//     let newCustomer={
//         name : name,
//         address: address
//     }
//     $.ajax({
//         headers:{
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         type:"post",
//         data:JSON.stringify(newCustomer),
//         url:"/customer/",
//         success:listCustomer
//     })
// }
function listCustomer(){
    $.ajax({
        type: "GET",
        url: "/customer/",
        success:function (data){
            let content = '    <tr>\n' +
                '        <td>Name</td>\n' +
                '        <td>Address</td>\n' +
                '        <td>Delete</td>\n' +
                '    </tr>';
            for (let i = 0; i < data.length; i++) {
                content += getCustomer(data[i]);
            }
            document.getElementById('customerList').innerHTML = content;
        }
    })
}

function getCustomer(customer) {
    return `<tr>
                    <td >${customer.name}</td>
                    <td >${customer.address}</td>` +
                    `<td><a class="deleteCustomer" href="${customer.id}">Delete</a></td>
                    </tr>`;
}


listCustomer();

$(document).ready(function () {
    //sư kiện nào thực hiện Ajax
    $('.deleteCustomer').click(function (event) {
        //lay du lieu
        let a = $(this);
        let customerId = a.attr("href");
        // goi ajax
        $.ajax({
            type: "DELETE",
            //tên API
            url: `/customer/${customerId}`,
            //xử lý khi thành công
            success: function (data) {
                a.parent().parent().remove();
            }


        });
        //chặn sự kiện mặc định của thẻ
        event.preventDefault();
    });
})