var nes;
$(function() {
  nes = new JSNES({
    'ui': $('#emulator').JSNESUI({
        "NES": [
            ['Super Mario Bros.', 'roms/super-mario-bros-j.nes'],
            ['Rockman 2', 'roms/rockman-2-j.nes']
        ]
    })
  });
});
