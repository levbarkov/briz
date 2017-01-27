        $(document.body).ready(function () {

            var controller = new ScrollMagic.Controller();

            //moving the image

            var safedriveimageMove00 = new ScrollMagic.Scene({
                triggerElement: '#safedrive-parent',
                triggerHook: 0
            })
            .setClassToggle('#safedrive', 'position1')
            .addTo(controller);

            var safedriveimageMove01 = new ScrollMagic.Scene({
                triggerElement: '#safedrive-parent',
                triggerHook: 'onLeave',
                offset: '100%'
            })
            .setClassToggle('#safedrive', 'position2')
            .addTo(controller);

            var safedriveimageMove02 = new ScrollMagic.Scene({
                triggerElement: '#safedrive-parent',
                triggerHook: 'onLeave',
                offset: '200%'
            })
            .setClassToggle('#safedrive', 'position3')
            .addTo(controller);

            var safedriveimageMove03 = new ScrollMagic.Scene({
                triggerElement: '#safedrive-parent',
                triggerHook: 'onLeave',
                offset: '300%'
            })
            .setClassToggle('#safedrive', 'position4')
            .addTo(controller);

            var safedriveimageMove04 = new ScrollMagic.Scene({
                triggerElement: '#safedrive-parent',
                triggerHook: 'onLeave',
                offset: '400%'
            })
            .setClassToggle('#safedrive', 'position5')
            .addTo(controller);

            var safedriveimageMove05 = new ScrollMagic.Scene({
                triggerElement: '#safedrive-parent',
                triggerHook: 'onLeave',
                offset: '500%'
            })
            .setClassToggle('#safedrive', 'position6')
            .addTo(controller);

            //showing and hiding messages

            var safedrivemessageShow00 = new ScrollMagic.Scene({
                triggerElement: '#safedrive-parent',
                duration: '10%',
                triggerHook: 'onLeave',
            })
            .setClassToggle('#safedrive-message-00', 'safedrive-message-shown')
            .addTo(controller);

            var safedrivemessageShow01 = new ScrollMagic.Scene({
                triggerElement: '#safedrive-parent',
                duration: '10%',
                triggerHook: 'onLeave',
                offset: '100%'
            })
            .setClassToggle('#safedrive-message-01', 'safedrive-message-shown')
            .addTo(controller);

            var safedrivemessageShow02 = new ScrollMagic.Scene({
                triggerElement: '#safedrive-parent',
                duration: '10%',
                triggerHook: 'onLeave',
                offset: '200%'
            })
            .setClassToggle('#safedrive-message-02', 'safedrive-message-shown')
            .addTo(controller);

            var safedrivemessageShow03 = new ScrollMagic.Scene({
                triggerElement: '#safedrive-parent',
                duration: '10%',
                triggerHook: 'onLeave',
                offset: '300%'
            })
            .setClassToggle('#safedrive-message-03', 'safedrive-message-shown')
            .addTo(controller);

            var safedrivemessageShow04 = new ScrollMagic.Scene({
                triggerElement: '#safedrive-parent',
                duration: '10%',
                triggerHook: 'onLeave',
                offset: '400%'
            })
            .setClassToggle('#safedrive-message-04', 'safedrive-message-shown')
            .addTo(controller);

            
        });