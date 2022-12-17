let images = {
    'receiving': ['./Projects/warehouseReceiving/images/dashboard.PNG', './Projects/warehouseReceiving/images/stripe.PNG', './Projects/warehouseReceiving/images/chats.PNG', './Projects/warehouseReceiving/images/bonnereception.PNG'],
    'Library': ['./Projects/Library/images/acccueil.png', './Projects/Library/images/listelivres.png', './Projects/Library/images/listememebres.png', './Projects/Library/images/responsive accueil.png'],
    'Movies': ['./Projects/Movies/images/catalogue.png', './Projects/Movies/images/desktopstat.png', './Projects/Movies/images/home.png', './Projects/Movies/images/panier.png', './Projects/Movies/images/desktopajouterfilms.png'],
    'Meteo': ['./Projects/weather/images/london landscape.png', './Projects/weather/images/madrid landscape.png', './Projects/weather/images/montreal.png', './Projects/weather/images/paris.png', './Projects/weather/images/responsive paris.png'],
    'Inventory': ['./Projects/warehouseStock/images/stats.png', './Projects/warehouseStock/images/responsiveMI.png', './Projects/warehouseStock/images/EXCEL.png', './Projects/warehouseStock/images/desktopkpi.png'],
    'Phone': ['./Projects/ecommerce/images/desktop catalogue.png', './Projects/ecommerce/images/desktop panier.png', './Projects/ecommerce/images/desktop stripe.png', './Projects/ecommerce/images/iphone responsive.png'],
    'Task': ['./Projects/Tasks/images/desktop completee.png', './Projects/Tasks/images/desktoptache.png', './Projects/Tasks/images/modifierdesktop.png', './Projects/Tasks/images/ajouterunetacheresponsive.png']
}
let videos = {
    'receiving': './Projects/warehouseReceiving/video/reception entrepot.mp4',
    'Library': ['./Projects/Library/video/librairie2.mp4'],
    'Movies': ['./Projects/Movies/video/movies_mp4.mp4'],
    'Meteo': ['./Projects/weather/video/reactweathervid.mp4'],
    'Inventory': ['./Projects/warehouseStock/video/WAREHOUSE FULL.mp4'],
    'Phone': ['./Projects/ecommerce/video/ecommerce.mp4'],
    'Task': ['./Projects/Tasks/video/todo tasks.mp4']
}
$(".openmodel").click(function (event) {
    var recipient = $(this).attr('data-whatever');
    var modal = $('#exampleModal');
    array = images[recipient];
    console.log(array)
    document.querySelectorAll('.mySlides img').forEach((x, i) => {
        x.setAttribute('src', array[i])
    })
    document.querySelectorAll('.cursor').forEach((x, i) => {
        x.setAttribute('src', array[i])
    })
    array.forEach(element => {
        console.log(element)
    });
    videoSRCauto = videos[recipient] + "";
    modal.find('#videosrc').attr('src', videoSRCauto)
    modal.find('.video')[0].load();
    $("#exampleModal").modal();
});
