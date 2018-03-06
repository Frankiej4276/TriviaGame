$(document).ready(function() {

    var rightAnswer = 0;
    var wrongAnswer = 0;
    var noAnswer=5;
    var number = 30;
    var intervalId;
    
        function checkAnswers() {
            $( '.button-question').on('click', function() {
    
                var $this = $(this);
                console.log($this);
                var val = $this.attr('value');
    
                if (val === 'true'){
                    rightAnswer ++;
                    console.log(rightAnswer);
    
                } 
                else {
                    wrongAnswer ++;
                    console.log(wrongAnswer);
                }    
                noAnswer = 5 - (rightAnswer + wrongAnswer);
    
            });

        }    
        checkAnswers();

        $('.startButton').on('click', function() {
            $('#start').hide();
            $('.main-body').show();
        });
    
        $('#submit').on('click', function() {
            $('.main-body').hide();
            $('#results').show();
            $('#rightAnswer').html(rightAnswer);
            $('#wrongAnswer').html(wrongAnswer);
            $('#noAnswer').html(noAnswer);
            stop();	
        });
    
       function run() {
    
          intervalId = setInterval(decrement, 1000);
    
        }
    
        function decrement() {
    
          number--;
    
          $('#timeRemaining').html("<h2>" + number + "</h2>");
        
          if (number === 0) {

            stop();

            $('.main-body').hide();
            $('#results').show();
            $('#rightAnswer').html(rightAnswer);
            $('#wrongAnswer').html(wrongAnswer);
            $('#noAnswer').html(noAnswer);
          }
        }
        function stop() {
    
          clearInterval(intervalId);
        }
        run();

        $('.againButton').on('click', function() {
            $('#start').hide();
            $('.main-body').show();
        });
    });