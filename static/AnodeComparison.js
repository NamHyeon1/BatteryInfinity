

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
// 1 : 용량점수
// 2 : 용량 변화 점수
// 3 : 가격점수
// 4 : potential 점수
// 5 : 특성
// 6 : reference
// 이미지 변경
function updateFirstMaterial(materialInfos) {
    materialName = materialInfos[0];
    capacityScore = materialInfos[1];
    capacityChangeScore = materialInfos[2];
    costScore = materialInfos[3];
    potentialScore = materialInfos[4]
    characteristics = materialInfos[5];
    reference = materialInfos[6];

    // temp : material 이름들의 정보를 담을 개체들을 담은 list
    temp = document.getElementsByClassName('firstMaterial')

    
    // 1) 소재 이름 변경
    for (let i = 0; i < temp.length; i++) {
        temp[i].innerHTML = materialName;
    }

    // 2) 소재 점수 변경
    // 2 - 1) 용량점수
    $("#firstCapacity").text(String(capacityScore) + "점");
    $("#firstCapacity").width(String(capacityScore) + "%");

    // 2 - 2) 용량 변화 점수
    $("#firstCapacityChange").text(String(capacityChangeScore) + "점");
    $("#firstCapacityChange").width(String(capacityChangeScore) + "%");
    
    // 2 - 3) 가격점수
    $("#firstCost").text(String(costScore) + "점");
    $("#firstCost").width(String(costScore) + "%");

    // 2 - 4) Potential 점수
    $("#firstPotential").text(String(potentialScore) + "점");
    $("#firstPotential").width(String(potentialScore) + "%");

    // 3) 특성
    $("#firstFeatures").text(characteristics);

    // 4) reference
    $("#firstReference").attr("href", reference);
    $("#firstReference").text(reference);
    $("#firstName").attr("href", reference);

    // 5) image
    let imageURL = "/static/images/Anode/" + materialName + ".png"
    console.log(imageURL);

    $("#firstImage").attr("src", imageURL);
}

function updateSecondMaterial(materialInfos) {
    materialName = materialInfos[0];
    capacityScore = materialInfos[1];
    capacityChangeScore = materialInfos[2];
    costScore = materialInfos[3];
    potentialScore = materialInfos[4]
    characteristics = materialInfos[5];
    reference = materialInfos[6];

    // temp : material 이름들의 정보를 담을 개체들을 담은 list
    temp = document.getElementsByClassName('secondMaterial')

    
    // 1) 소재 이름 변경
    for (let i = 0; i < temp.length; i++) {
        temp[i].innerHTML = materialName;
    }

    // 2) 소재 점수 변경
    // 2 - 1) 용량점수
    $("#secondCapacity").text(String(capacityScore) + "점");
    $("#secondCapacity").width(String(capacityScore) + "%");

    // 2 - 2) 용량 변화 점수
    $("#secondCapacityChange").text(String(capacityChangeScore) + "점");
    $("#secondCapacityChange").width(String(capacityChangeScore) + "%");
    
    // 2 - 3) 가격점수
    $("#secondCost").text(String(costScore) + "점");
    $("#secondCost").width(String(costScore) + "%");

    // 2 - 4) Potential 점수
    $("#secondPotential").text(String(potentialScore) + "점");
    $("#secondPotential").width(String(potentialScore) + "%");

    // 3) 특성
    $("#secondFeatures").text(characteristics);

    // 4) reference
    $("#secondReference").attr("href", reference);
    $("#secondReference").text(reference);
    $("#secondName").attr("href", reference);

    // 5) image
    let imageURL = "/static/images/Anode/" + materialName + ".png"
    console.log(imageURL);

    $("#secondImage").attr("src", imageURL);
}

function getMaterials() {

    materialInfo = {
        "index" : 1
    }

    $.ajax({
        url: "/getFirstMaterialInfo",
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(materialInfo),
        success: function (first) {
            // alert(first);
            console.log(first);

            updateFirstMaterial(first)

            
            materialInfo = {
                "index" : 1
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