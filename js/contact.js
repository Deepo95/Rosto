<script>
    $(document).ready(function () {
        $('#submit').on('click', function (e) {
            e.preventDefault();
            myFunction();
        });
    });
    function myFunction(){
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $("#message").val();
        $('#over').css('visibility','visible');
        $.ajax({
            method: 'post',
            url: '{{route('submit',["0"])}}',
            data:{
                name: name,
                email: email,
                subject: subject
            },
            datatype: 'jason',
            headers: {
                'X-CSRF-TOKEN': "{{@csrf_token()}}"
            },
            success: function(response){
                $('#over').css('visibility','hidden');
                if(response.success){
                    $('#suc').css('visibility','visible');
                    $('#suc').css('opacity', 1.0);
                    $('#suc').css('display', 'block');
                    $('#suc').css('left', 0);
                    $('#fal').css('visibility','hidden');
                }
                else{
                    $('#fal').css('visibility','visible');
                    $('#fal').css('opacity', 1.0);
                    $('#fal').css('display', 'block');
                    $('#fal').css('left', 0);
                    $('#suc').css('visibility','hidden');
                }
            },
            error: function(response,status){
                $('#over').css('visibility','hidden');
                console.log(response);
                console.log(status);
                $('#fal').css('visibility','visible');
                $('#fal').css('opacity', 1.0);
                $('#fal').css('display', 'bolck');
                $('#fal').css('left', 0);
                $('#suc').css('visibility','hidden');
            }
        })

    }
</script>