var nes;
$(function() {
  nes = new JSNES({
    'ui': $('#emulator').JSNESUI({
        "Roms": [
            ['Super Mario Bros.', 'roms/super-mario-bros-j.nes']
        ]
    })
  });
});
