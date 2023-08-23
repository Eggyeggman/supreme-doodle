AFRAME.registerComponent('drive',{
    init:function(){
        var gamestateValue = this.el.getAttribute("game")
        if(gamestateValue =="play"){
            this.driveCar()
        }
    },
    driveCar:function(){
        var multiply = 10
        var wheelRotation = 0
        window.addEventListener("keydown",function(e){
            var wheel = document.querySelector("#control-wheel")
            if(e.code=="ArrowRight"){
                wheelRotation -=5
                wheel.setAttribute("rotation",{x:0,y:0,z:wheelRotation})
            }
            if(e.code=="Arrowleft" && wheelRotation<40){
                wheelRotation +=5
                wheel.setAttribute("rotation",{x:0,y:0,z:wheelRotation})
            }
            var cameraRig = document.querySelector("#camera-rig")
            var cameraRotation = cameraRig.getAttribute("rotation")
            var cameraPosition = cameraRig.getAttribute("position")
            var cameraMovementControls = cameraRig.getAttribute("movement-controls")
            cameraRig.setAttribute("movement-controls",{"speed":cameraMovementControls + 0.05})
            var cameraDirection = new THREE.Vector3()
            cameraRig.object3D.getWorldDirection(cameraDirection)
            if(e.code=="ArrowRight"){
                cameraRotation.y -= 5
                cameraRig.setAttribute("rotation",{x:0,y:cameraRotation,z:0})
                cameraRig.setAttribute("movement-controls",{"speed":cameraMovementControls.speed + 0.05})
            }
            if(e.code=="ArrowLeft"){
                cameraRotation.y += 5
                cameraRig.setAttribute("rotation",{x:0,y:cameraRotation,z:0})
                cameraRig.setAttribute("movement-controls",{"speed":cameraMovementControls.speed + 0.05})
            }
            if(e.code=="ArrowUp"){
                multiply = 0.5
            if(multiply<=100){var acceloraterCar=document.querySelector("#control-acce")}
            var carSpeed = document.querySelector("#speed")
            }

        })
    }
})