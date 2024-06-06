

$(document).ready(function() {

    getMaterials();
    
    $(function () {
        $('textarea').on('keydown', function (event) {
            if (event.keyCode == 13) {
                const inputText = $(this).val();

                $(this).val('');
            
                console.log(inputText);
            
                const parent = $(this).parent();
                const ul = parent.find('ul');
            
                let li = '<li class="list-group-item d-flex justify-content-between align-items-center">' + inputText + '<span class="badge badge-primary badge-pill">0</span></li>'
            
                ul.append(li);
            
            }

        });
    });
});

$(document).on('click', '.badge', function(){ 
    let temp = $(this).text();
    let num = Number(temp);
    num = num + 1;
    $(this).text(num);
}); 

// 0 : 이름
// 1 : 이온 전도도 점수
// 2 : 안정성 점수
// 3 : reference
// 4 : 특징
// 이미지 변경
function updateFirstMaterial(materialInfos) {
    materialName = materialInfos[0];
    ionScore = materialInfos[1];
    stabilityScore = materialInfos[2];
    characteristics = materialInfos[4];
    reference = materialInfos[3];

    // temp : material 이름들의 정보를 담을 개체들을 담은 list
    temp = document.getElementsByClassName('firstMaterial')

    
    // 1) 소재 이름 변경
    for (let i = 0; i < temp.length; i++) {
        temp[i].innerHTML = materialName;
    }

    // 2) 소재 점수 변경
    // 2 - 1) 이온 전도도 점수
    $("#firstIon").text(String(ionScore) + "점");
    $("#firstIon").width(String(ionScore) + "%");

    // 2 - 2) 안정성 점수
    $("#firstStability").text(String(stabilityScore) + "점");
    $("#firstStability").width(String(stabilityScore) + "%");
    
    // 3) 특성
    $("#firstFeatures").text(characteristics);

    // 4) reference
    $("#firstReference").attr("href", reference);
    $("#firstReference").text(reference);
    $("#firstName").attr("href", reference);

    // 5) image
    let imageURL = "/static/images/Electrolyte/" + materialName + ".png"
    console.log(imageURL);

    $("#firstImage").attr("src", imageURL);
}

function updateSecondMaterial(materialInfos) {
    materialName = materialInfos[0];
    ionScore = materialInfos[1];
    stabilityScore = materialInfos[2];
    characteristics = materialInfos[4];
    reference = materialInfos[3];

    // temp : material 이름들의 정보를 담을 개체들을 담은 list
    temp = document.getElementsByClassName('secondMaterial')

    
    // 1) 소재 이름 변경
    for (let i = 0; i < temp.length; i++) {
        temp[i].innerHTML = materialName;
    }

    // 2) 소재 점수 변경
    // 2 - 1) 이온 전도도 점수
    $("#secondIon").text(String(ionScore) + "점");
    $("#secondIon").width(String(ionScore) + "%");

    // 2 - 2) 안정성 점수
    $("#secondStability").text(String(stabilityScore) + "점");
    $("#secondStability").width(String(stabilityScore) + "%");
    
    // 3) 특성
    $("#secondFeatures").text(characteristics);

    // 4) reference
    $("#secondReference").attr("href", reference);
    $("#secondReference").text(reference);
    $("#secondName").attr("href", reference);

    // 5) image
    let imageURL = "/static/images/Electrolyte/" + materialName + ".png"
    console.log(imageURL);

    $("#secondImage").attr("src", imageURL);
}

function getMaterials() {

    materialInfo = {
        "index" : 2
    }

    $.ajax({
        url: "/getFirstMaterialInfo",
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(materialInfo),
        success: function (first) {
            // alert(first);
            // console.log(first);

            updateFirstMaterial(first)

            
            materialInfo = {
                "index" : 2
            }

            $.ajax({
                url: "/getSecondMaterialInfo",
                type: "post",
                contentType: "application/json",
                data: JSON.stringify(materialInfo),
                success: function (second) {
                    // alert("성공이요! 222");
                    console.log(second);
                    
                    updateSecondMaterial(second);
                },
                error: function (event) {
                    alert("실패2!");
                    
                }
            });
        },
        error: function (event) {
            alert("실패1!");
            
        }
    });
    
    
}