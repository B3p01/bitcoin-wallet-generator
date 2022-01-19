function generate(){
    $("#copyAdd").show();
    $("#copyKey").show();
    $("#addDiv").show();
    $("#QRDiv").show();
    $("#QRpiDiv").show();
    $("#piKeyDiv").show();
    $("#addQRHead").show();
    $("#addHead").show();
    $("#piKeyHead").show();
    $("#piQRHead").show();
    let pair = buidl.getNewAddress();
    let address = pair.p2pkh;
    let pikey = pair.pk;
    document.getElementById("addDiv").innerHTML = address;
    document.getElementById("piKeyDiv").innerHTML = pikey;
    document.getElementById("QRDiv").innerHTML = "";
    document.getElementById("QRpiDiv").innerHTML = "";
    new QRCode(document.getElementById("QRDiv"), address);
    new QRCode(document.getElementById("QRpiDiv"), pikey);
}

function donate(){
    var copytxt = document.getElementById("donate");
    copytxt.select();
    copytxt.setSelectionRange(0, 999999);
    document.execCommand("copy");
    alert("Copied: " + copytxt.value);
}

function address(){
    var copytxt = document.getElementById("addDiv");
    copytxt.select();
    copytxt.setSelectionRange(0, 999999);
    document.execCommand("copy");
    alert("Copied: " + copytxt.value);
}

function key(){
    var copytxt = document.getElementById("piKeyDiv");
    copytxt.select();
    copytxt.setSelectionRange(0, 999999);
    document.execCommand("copy");
    alert("Copied: " + copytxt.value);
}