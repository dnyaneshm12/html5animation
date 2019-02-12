var tl = new TimelineLite();
 
tl.from("#lower",1,{autoAlpha:0, x:-10}) 
 .from("#laptop",1,{autoAlpha:0, x:-100}) 
 .from("#man",1,{autoAlpha:0, y:-2200}) 
 .from("#screen",1,{autoAlpha:0, x:0}) 
 .from("#binacular",1,{autoAlpha:0}) 
 .from("#papers",1,{autoAlpha:0})
 .from("#excalam",1,{autoAlpha:0, ease:Linear.easeNone, repeat:-1});


