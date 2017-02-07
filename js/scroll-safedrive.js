        $(document.body).ready(function () {

            var controller = new ScrollMagic.Controller();

            //moving the image

            var safedriveimageMove00 = new ScrollMagic.Scene({
                triggerElement: '#safedrive-parent',
                triggerHook: 0
            })
            .addTo(controller);


            //showing and hiding messages

            var safedrivemessageShow00 = new ScrollMagic.Scene({
                triggerElement: '#safedrive-parent',
                duration: '14%',
                triggerHook: 'onLeave',
                offset: '150%'
            })
            .setClassToggle('#safedrive-message-00', 'safedrive-message-shown')
            .addTo(controller);

            //var safedrivemessageShow001 = new ScrollMagic.Scene({
            //    triggerElement: '#safedrive-parent',
            //    duration: '22%',
            //   triggerHook: 'onLeave',
            //})
            //придерживаем сверху заголовок и блок сообщения
            //.setClassToggle('#safe-title', 'content__safe-drive__title-fixed')
            //.addTo(controller);

            var safedrivemessageShow01 = new ScrollMagic.Scene({
                triggerElement: '#safedrive-parent',
                duration: '14%',
                triggerHook: 'onLeave',
                offset: '270%'
            })
            .setClassToggle('#safedrive-message-01', 'safedrive-message-shown')
            .addTo(controller);

            //var safedrivemessageShow011 = new ScrollMagic.Scene({
            //    triggerElement: '#safedrive-parent',
            //    duration: '22%',
            //    triggerHook: 'onLeave',
             //   offset: '157%'
            //})
            //отпускаем заголовок
            //.setClassToggle('#safe-title', 'content__safe-drive__title')
            //.addTo(controller);

            var safedrivemessageShow02 = new ScrollMagic.Scene({
                triggerElement: '#safedrive-parent',
                duration: '14%',
                triggerHook: 'onLeave',
                offset: '390%'
            })
            .setClassToggle('#safedrive-message-02', 'safedrive-message-shown')
            .addTo(controller);

            var safedrivemessageShow03 = new ScrollMagic.Scene({
                triggerElement: '#safedrive-parent',
                duration: '14%',
                triggerHook: 'onLeave',
                offset: '490%'
            })
            .setClassToggle('#safedrive-message-03', 'safedrive-message-shown')
            .addTo(controller);

            var safedrivemessageShow04 = new ScrollMagic.Scene({
                triggerElement: '#safedrive-parent',
                duration: '23%',
                triggerHook: 'onLeave',
                offset: '590%'
            })
            .setClassToggle('#safedrive-message-04', 'safedrive-message-shown')
            .addTo(controller);

            
        });