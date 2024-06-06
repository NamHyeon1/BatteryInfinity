

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
// 1 : 전압점수
// 2 : 용량점수
// 3 : 가격점수
// 4 : 특성
// 5 : reference
// 이미지 변경
function updateFirstMaterial(materialInfos) {
    materialName = materialInfos[0];
    voltageScore = materialInfos[1];
    capacityScore = materialInfos[2];
    costScore = materialInfos[3];
    characteristics = materialInfos[4];
    reference = materialInfos[5];

    // temp : material 이름들의 정보를 담을 개체들을 담은 list
    temp = document.getElementsByClassName('firstMaterial')

    
    // 1) 소재 이름 변경
    for (let i = 0; i < temp.length; i++) {
        temp[i].innerHTML = materialName;
    }

    // 2) 소재 점수 변경
    // 2 - 1) 전압점수
    $("#firstVoltage").text(String(voltageScore) + "점");
    $("#firstVoltage").width(String(voltageScore) + "%");

    // 2 - 2) 용량점수
    $("#firstCapacity").text(String(capacityScore) + "점");
    $("#firstCapacity").width(String(capacityScore) + "%");
    
    // 2 - 3) 가격점수
    $("#firstCost").text(String(costScore) + "점");
    $("#firstCost").width(String(costScore) + "%");

    // 3) 특성
    $("#firstFeatures").text(characteristics);

    // 4) reference
    $("#firstReference").attr("href", reference);
    $("#firstReference").text(reference);
    $("#firstName").attr("href", reference);

    // 5) image
    let imageURL = "/static/images/Cathode/" + materialName + ".png"
    // console.log(imageURL);

    $("#firstImage").attr("src", imageURL);
}

function updateSecondMaterial(materialInfos) {
    materialName = materialInfos[0];
    voltageScore = materialInfos[1];
    capacityScore = materialInfos[2];
    costScore = materialInfos[3];
    characteristics = materialInfos[4];
    reference = materialInfos[5];

    // temp : material 이름들의 정보를 담을 개체들을 담은 list
    temp = document.getElementsByClassName('secondMaterial')

    
    // 1) 소재 이름 변경
    for (let i = 0; i < temp.length; i++) {
        temp[i].innerHTML = materialName;
    }

    // 2) 소재 점수 변경
    // 2 - 1) 전압점수
    $("#secondVoltage").text(String(voltageScore) + "점");
    $("#secondVoltage").width(String(voltageScore) + "%");

    // 2 - 2) 용량점수
    $("#secondCapacity").text(String(capacityScore) + "점");
    $("#secondCapacity").width(String(capacityScore) + "%");
    
    // 2 - 3) 가격점수
    $("#secondCost").text(String(costScore) + "점");
    $("#secondCost").width(String(costScore) + "%");

    // 3) 특성
    $("#secondFeatures").text(characteristics);

    // 4) reference
    $("#secondReference").attr("href", reference);
    $("#secondReference").text(reference);
    $("#secondName").attr("href", reference);

    // 5) image
    let imageURL = "/static/images/Cathode/" + materialName + ".png"
    // console.log(imageURL);

    $("#secondImage").attr("src", imageURL);
}

function getMaterials() {

    materialInfo = {
        "index" : 0
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
                "index" : 0
            }

            $.ajax({
                url: "/getSecondMaterialInfo",
                type: "post",
                contentType: "application/json",
                data: JSON.stringify(materialInfo),
                success: function (second) {
                    // alert("성공이요! 222");
                    // console.log(second);
                    
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