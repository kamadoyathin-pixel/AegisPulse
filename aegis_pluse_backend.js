function input_value(){

        // getting the input password for validation

        var input_password=document.getElementById("next_input");
        var password=input_password.value;
        let count=0;
        let lower=false,upper=false,symbol=false,number=false;

        //The list most commonly used passwords for the evalution of probability of an attacker to guessing the password
        const common_passwords = [
                                "12345678", "123456789", "1234567890", "password", "password123", "password12", "password!", "p@ssword", "pa$$word", "p@ssword123",
                                "qwertyuiop", "qwerty123", "qazwsxedc", "asdfghjkl", "zxcvbnm123", "1234qwer", "1234asdf", "1q2w3e4r", "asdf1234", "qwer1234",
                                "welcome1", "welcome123", "welcome!", "letmein123", "letmein1", "changeme", "changeme123", "secret123", "mustang1", "charlie1",
                                "iloveyou", "sunshine", "princess", "football", "baseball", "soccer123", "basketball", "superman", "batman123", "pokemon123",
                                "computer", "keyboard", "internet", "security", "admin123", "administrator", "manager1", "supervisor", "support123", "server123",
                                "11111111", "22222222", "33333333", "44444444", "55555555", "66666666", "77777777", "88888888", "99999999", "00000000",
                                "11223344", "12341234", "123123123", "11112222", "12344321", "87654321", "987654321", "0987654321", "aaabbbccc", "abcdefgh",
                                "january1", "february", "march123", "april123", "may12345", "june1234", "july1234", "august123", "september", "october1",
                                "november", "december", "summer123", "winter123", "spring123", "autumn123", "monday123", "friday123", "sunday123", "weekend1",
                                "monkey123", "shadow123", "dragon123", "killer123", "cookie123", "hunter21", "matrix123", "oracle123", "wizard123", "warrior1",
                                "password01", "password99", "password2024", "password2025", "passw0rd1","welcome1234", "welcome2025", "welcomehome", "letmein2024", "letmein1234",
                                "trustnoone", "trustno123", "changeme01", "changeme2024", "default1234","administrator1", "administrator123", "supervisor123", "manager2024",
                                 "employee123","company2024", "officeadmin", "helpdesk123", "service2024", "support2025","network1234", "wireless123", "internet2024", "computer01", "computer1234",
                                "desktop123", "laptop2024", "keyboard123", "microsoft1", "windows2024","android2024", "iphone2024", "samsung123", "facebook01", "instagram1",
                                "youtube1234", "linkedin123", "twitter2024", "amazon2024", "google2024","security01", "security123", "securepass", "firewall01", "database123",
                                "serveradmin", "backup2024", "storage123", "private123", "confident1","secretpass", "masterkey1", "rootaccess", "access2024", "loginuser1",
                                "guestlogin", "username01", "account123", "profile123", "settings01","sunshine01", "moonlight1", "starlight1", "rainbow123", "skyblue123",
                                "beautiful1", "lovelygirl", "sweetheart", "happiness1", "friendship","bestfriend1", "forever01", "goodtimes1", "familytime", "memories01",
                                "princess01", "queen2024", "kingdom01", "royalty123", "legendary1","champion01", "victory123", "success2024", "future2025", "dreamlife",
                                "superstar1", "wonderland", "adventure1", "explorer01", "traveler01","warrior123", "soldier123", "captain123", "general123", "commander1",
                                "guardian01", "protector1", "knight2024", "heroiclife", "defender01","dragonfire", "dragon2024", "phoenix123", "tigerpower", "lionheart1",
                                "panther123", "eagleeye01", "falcon2024", "wolfpack01", "bearclaw1","monster123", "beastmode1", "predator01", "hunter2024", "shadow2024",
                                "matrix2024", "oracle2024", "wizard2024", "magicworld", "mystery01","pokemon2024", "naruto2024", "animeworld", "minecraft1", "fortnite01",
                                "roblox2024", "freefire01", "pubgmobile", "gamerworld", "gaminglife","football01", "soccer2024", "basketball1", "baseball01", "cricket2024",
                                "tennis2024", "volleyball", "badminton1", "formulaone", "ferrari2024","mercedes01", "bmwseries1", "audiquattro", "toyota2024", "honda2024",
                                "teslamodel", "mustang2024", "chevrolet1", "hyundai123", "kiamotors1", "chocolate1", "vanilla123", "icecream01", "strawberry", "blueberry1",
                                "pineapple1", "watermelon", "banana2024", "orangejuice", "coffee2024","milkshake1", "hamburger1", "cheesepizza", "friedchick", "sandwich01",
                                "summer2024", "winter2024", "spring2024", "autumn2024", "vacation01","weekend123", "holiday2024", "fridaynight", "saturday01", "sunday2024",
                                "january2024", "february24", "march2024", "april2024", "august2024","september1", "october2024", "november24", "december24", "calendar01"
                                ];

        for(let i=0;i<common_passwords.length;i++){
                if(password == common_passwords[i]){
                        Swal.fire({
                        title: `<span style="color: #1f6dc5; text-shadow: -1px -1px 0 #37cecc, 1px -1px 0 #37cecc, -1px 1px 0 #37cecc, 1px 1px 0 #37cecc;"> SORRY !</span>`,
                        iconColor:"#0ad8eb",
                        iconHtml:"🤔",
                        background: "#595657 ",
                        color:"#fbf2f2",
                        html:`
                        <div style="border: 1px solid rgb(0,0,0,0.8);color:#fbf2f2; border-radius:20px; margin:10px;font-size:1.25rem;padding:10px;">
                        <p>It is a very simple and common password.</p>
                        <p>Maybe you can try another one🥱.</p></div>`
                        ,
                        
                        confirmButtonText:"TRY AGAIN",
                        confirmButtonColor:"#0498c5"
                 });
                 document.getElementById("next_input").value="";
                 return 0;
                }
        }

        //The length of the password lesser than 8, the password has more chance of crackable
        if(password.length <8){
                Swal.fire({
                        title: `<span style="color: #8a162f; text-shadow: -1px -1px 0 #f72350, 1px -1px 0 #f72350, -1px 1px 0 #f72350, 1px 1px 0 #f72350;"> VERY WEAK !</span>`,
                        iconColor:"#c73453",
                        iconHtml:"🫢",
                        background: "#595657 ",
                        color:"#fbf2f2",
                        html:`
                        <div style="border: 1px solid rgb(0,0,0,0.8);color:#fbf2f2; border-radius:20px; margin:10px;font-size:1.25rem;padding:10px;">
                        <p>Password length must be greater than 8 characters.</p></div>`
                        ,
                        
                        confirmButtonText:"TRY AGAIN",
                        confirmButtonColor:"#990000"
                 });
                 document.getElementById("next_input").value="";
        }else{
        
        // calculating the occurance of the different types of character
        
        
        for(let i=0;i<password.length;i++){
                let code=password.charCodeAt(i);
                if(code >= 48 && code <=57 && number==false){
                        count=count+10;
                        number=true;
                }else if(code >=65 && code<=90 && upper==false){
                        count=count+26
                        upper=true;
                }else if(code >=97 && code<=122 && lower==false){
                        count=count+26;
                        lower=true;
                }else if(symbol==false){
                        count=count+33;
                        symbol=true
                }
        }


        //Calculating the entropy from the SHANNON ENTROPY

        let entropy=(password.length) * Math.log2(count);



        alert_box(entropy,password);
        }

}

function alert_box(entropy,pass){
       
        // creating a new password for harder to break
        //I am using Leet speak (L33t sp34k) method for unbreakable password and It is also vulnerable againts it the hacker analysed the pattern

        var newpass="";

        let characterMAP= {
                        'a': '@', 'b': '8', 'c': '(', 'd': '|)', 'e': '3', 'f': 'ph', 'g': '9', 'h': '#', 'i': '!', 'j': ';', 
                        'k': '|<', 'l': '1', 'm': '^^', 'n': '/\\\\/', 'o': '0', 'p': '|D', 'q': '(,)', 'r': '[z', 's': '$', 't': '7', 
                        'u': '|_|', 'v': '\/', 'w': '\\\'', 'x': '}{', 'y': '`/', 'z': '2','A': '4', 'B': '8', 'C': '<', 'D': '|>', 'E': '3', 
                        'F': '|=', 'G': '6', 'H': '|-|', 'I': '1', 'J': '_|', 'K': '|<', 'L': '|_', 'M': '|\\/|', 'N': '|\\|', 'O': '0', 
                        'P': '|*', 'Q': 'O_', 'R': '|2', 'S': '5', 'T': '7', 'U': '|_|', 'V': '\\/', 'W': '\\/\\/', 'X': '><', 'Y': '`/', 'Z': '2',
                        '1': '!', '2': '@', '3': '#', '4': '$', '5': '%', '6': '^', '7': '&', '8': '*', '9': '(', '0': ')',
                        '!': 'a', '?': 'b', '.': 'c', ',': '.', '-': '_', '_': '+'
                
                         };

        for(let i=0;i<pass.length;i++){

                newpass=newpass + (characterMAP[pass[i]] || pass[i]);
        }
        
        
        // return the customized alert box with help of node js and the strength of the password 


        if(entropy < 36){
                Swal.fire({
                        title: `<span style="color: #8a162f; text-shadow: -1px -1px 0 #f72350, 1px -1px 0 #f72350, -1px 1px 0 #f72350, 1px 1px 0 #f72350;"> WEAK !</span>`,
                        iconColor:"#c73453",
                        iconHtml:"🔓",
                        background: "#595657 ",
                        color:"#fbf2f2",
                        html:`
                        <div style="border: 1px solid rgb(0,0,0,0.8);color:#fbf2f2; border-radius:20px; margin:10px;font-size:1.25rem;padding:10px;">
                        <p>Your password strength is ${entropy.toFixed(2)} bits. </p>
                        <p>Maybe you could try this "<span style="color:green;">${newpass}</span>" as your password.</p>
                        </div>`
                        ,
                        
                        confirmButtonText:"RESET",
                        confirmButtonColor:"#990000"
                 });
        
        }else if(entropy >=  36 && entropy <60){
                Swal.fire({
                        title: `<span style="color: #c6b51c; text-shadow: -1px -1px 0 #e7bb41, 1px -1px 0 #e7bb41, -1px 1px 0 #e7bb41, 1px 1px 0 #e7bb41;">MODERATE !</span>`,
                        iconColor:"#c19e45",
                        iconHtml:"🔏",
                        background: "#595657 ",
                        color:"#fbf2f2",
                        html:`
                        <div style="border: 1px solid rgb(0,0,0,0.8);color:#fbf2f2; border-radius:20px; margin:10px;font-size:1.25rem;padding:10px;">
                        <p>Your password strength is ${entropy.toFixed(2)} bits. </p>
                        <p>It will be better if you try this "<span style="color:green;">${newpass}</span>" as your password.</p>
                        </div>`
                        ,
                        
                        confirmButtonText:"It's OK",
                        confirmButtonColor:"#9c7d0c"
                 });
        }else if(entropy >=60 && entropy <80){
                Swal.fire({
                        title: `<span style="color: #4bab0f; text-shadow: -1px -1px 0 #4dcc6d, 1px -1px 0 #4dcc6d, -1px 1px 0 #4dcc6d, 1px 1px 0 #4dcc6d;">STRONG !</span>`,
                        iconColor:"#70e814",
                        iconHtml:"⚔️",
                        background: "#595657 ",
                        color:"#fbf2f2",
                        html:`
                        <div style="border: 1px solid rgb(0,0,0,0.8);color:#fbf2f2; border-radius:20px; margin:10px;font-size:1.25rem;padding:10px;">
                        <p>Your password strength is ${entropy.toFixed(2)} bits. </p>
                        <p>It is a well structured password.</p>
                        <p>Dont you forget</p>
                        </div>`
                        ,
                        confirmButtonText:"DONE",
                        confirmButtonColor:"#2c8513"
                 });
        }else if(entropy>=80 && entropy<=127){
                Swal.fire({
                        title: `<span style="color: #649a43; text-shadow: -1px -1px 0 #4dcc6d, 1px -1px 0 #4dcc6d, -1px 1px 0 #4dcc6d, 1px 1px 0 #4dcc6d;">VERY STRONG!</span>`,
                        iconColor:"#599e24",
                        iconHtml:"💪🏼",
                        background: "#595657 ",
                        color:"#fbf2f2",
                        html:`
                        <div style="border: 1px solid rgb(0,0,0,0.8);color:#fbf2f2; border-radius:20px; margin:10px;font-size:1.25rem;padding:10px;">
                        <p>Your password strength is ${entropy.toFixed(2)} bits. </p>
                        <p>Your password is as strong as Diamond 💎</p>
                        </div>`
                        ,
                        
                        confirmButtonText:"NICE",
                        confirmButtonColor:"#2c8513"
                 });
        }else if(entropy >127){
                Swal.fire({
                        title: `<span style="color: #649a43; text-shadow: -1px -1px 0 #4dcc6d, 1px -1px 0 #4dcc6d, -1px 1px 0 #4dcc6d, 1px 1px 0 #4dcc6d;">UNBREAKABLE!</span>`,
                        iconColor:"#599e24",
                        iconHtml:"🛡️",
                        background: "#595657 ",
                        color:"#fbf2f2",
                        html:`
                        <div style="border: 1px solid rgb(0,0,0,0.8);color:#fbf2f2; border-radius:20px; margin:10px;font-size:1.25rem;padding:10px;">
                        <p>Your password strength is ${entropy.toFixed(2)} bits. </p>
                        <p>It takes for the years to crack...</p>
                        <p>You are in very safe ✌🏻</p>
                        </div>`
                        ,
                        
                        confirmButtonText:"SECURE",
                        confirmButtonColor:"#2c8513"
                 });
        }

        document.getElementById("next_input").value="";
}




//This is all I capable of now 
//DATE : 7th JUNE 2026,
//TIME : 23:05.
