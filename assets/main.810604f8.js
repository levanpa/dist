import"./style.79a5aef2.js";const l={"01":"\u0103n \u0103m","02":"R Tr","03":"ong \xF4ng","04":"oa oan","05":"at \xE2t","06":"\u0103 \u0103t","07":"\xF4c \u01A1c","08":"9","09":"G Gi",10:"\u01A1 \u01A1i",11:"eo \xEAu",12:"Y",13:"Ng Gh",14:"T Th",15:"oc oe",16:"an \xE2n",17:"",18:"\xEAn \xEAm",19:"i\xEAn i\xEAm",20:"en em",21:"uy\xEAn uy\xEAt",22:"ap \xE2p",23:"op \xF4p",24:"H",25:"oi \xF4i",26:"in im",27:"4",28:"e \xEA f",29:"it ip",30:"ac \xE2c",31:"D Z",32:"ang \xE2ng",33:"Ngh",34:"ung \u01B0ng",35:"8",36:"\u0103ng",37:"i\xEAu i\xEAt",38:"anh ach",39:"7",40:"1",41:"Q Qu",42:"\u0103c \u0103p",43:"\u01A1n \u01A1m",44:"i\xEAp i\xEAc",45:"ut up",46:"ai ao",47:"6",48:"iu ia",49:"3",50:"ich ing",51:"et \xEAt",52:"ech \xEAch",53:"N Nh",54:"ua \u01B0a",55:"um \u01B0m",56:"uy u\xEA",57:"\u01B0t \u01B0p",58:"x oanh",59:"\u01B0\u01A1c \u01B0\u01A1p",60:"om \xF4m",61:"u \u01B0",62:"un \u01B0n",63:"\u01A1t \u01A1p",64:"u\xE2n u\xE2ng",65:"i j",66:"am \xE2m",67:"oat o\u0103t",68:"o on",69:"C Ch",70:"o\u0103c oai",71:"uya uynh",72:"u\xF4ng \u01B0\u01A1ng",73:"uc \u01B0c",74:"inh i\xEAng",75:"5",76:"\u0110",77:"L",78:"u\xF4n u\xF4m",79:"oang oach",80:"P Ph",81:"ot \xF4t",82:"au \xE2u",83:"eng \xEAng",84:"ui \u01B0i",85:"K Kh",86:"\u01B0\u01A1t \u01B0\u01A1m",87:"u\xF4c u\xF4t",88:"u\xE2y uyt",89:"2",90:"\u01B0\u01A1u \u01B0\u01A1n",91:"V W",92:"ep \xEAp",93:"\u01B0u u\xE2t",94:"\xF4 \xF4n",95:"u\xF4i \u01B0\u01A1i",96:"M",97:"B",98:"ay \xE2y",99:"a \xE2","00":"S"},u={1:" ",2:" ",3:"\\",4:"\\",5:"/",6:"/",7:".",8:".",9:"?~",0:"?~"};function r(){let i=$(".input-code").val().split(/ |\n/);$(".list-wrapper").html(""),i.forEach((t,a)=>{p(t,a)})}function p(s,i){let t="";if(s.length==5){let a=s.substring(0,2),c=s.substring(2,4),o=s.substring(4,5),n=l[a].split(" "),e=l[c].split(" ");t=`<div id="word-${i}" class="word">
        <span class="code-of-word">${s}</span>
        <ul class="list">
          <li class="item first is-active">${n[0]}</li>
          ${n[1]?`<li class="item first">${n[1]}</li>`:""}
          </ul>
          <ul class="list">
          <li class="item second is-active">${e[0]}</li>
          ${e[1]?`<li class="item second">${e[1]}</li>`:""}
          ${e[2]?`<li class="item second">${e[2]}</li>`:""}
        </ul>
        <div class="result">
          <span class="result-item first">${n[0]}</span>
          <span class="result-item second">${e[0]}</span>
          <span class="result-item mark">&nbsp;${u[o]}</span>
        </div>
      </div>`}else if(s.length%2==0){t=`<div id="word-${i}" class="word">
        <span class="code-of-word">${s}</span>
        <div class="result">`;for(let a=0;a<s.length;a+=2)console.log(s[a]+s[a+1]),t+=`<span class="result-item">${l[s[a]+s[a+1]].split(" ")[0]}</span>`;t+="</div></div>"}else d(s,i);$(".list-wrapper").append(t)}function d(s,i){let t=`<div id="word-${i}" class="word is-error">
      <span class="text">L\u1ED7i</span>
    </div>`;$(".list-wrapper").append(t)}function g(){$(".list-wrapper").on("click",".item",s=>{let i=$(s.target).text(),t=$(s.target).attr("class");t=t.includes("first")?"first":"second",$(s.target).parents(".word").find(`.result > .${t}`).text(i),$(s.target).parent().find(".item").removeClass("is-active"),$(s.target).addClass("is-active")}),$(".list-wrapper").on("click",".word",s=>{$(s.currentTarget).attr("id"),$(".list-wrapper .word").removeClass("is-active"),$(s.currentTarget).addClass("is-active")}),$(".submit-code").on("click",s=>{s.preventDefault(),r()})}$(function(){r(),g()});
