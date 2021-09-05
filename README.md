What is node?
NodeJs is javascript in the server side powered by the V8 javascript engine developed by google. This engine is written in c++ so the main task of the engine is to create, every time javascript script is called, a new environment instance with the bindings to some functionality between javascript and c++ functions. g.e: 
    * Javascript language doesn't know how to work with the DOM for a webpage, so v8 in browser allows some bindings to js from c++ to do this job such as window or document variables
    * Javascript doesn't support file system access or os check neither so for node, v8 is binding those functionalities

Differences between node and chrome js
The main difference between those two uses of v8 engine are the bindings to c++ functions, in browser we have binfings to control teh browser itself, in node we have bindings to controle some parts of the operating system (inside the node environment generated for this v8 instance) 

Nodejs exclusives:
    * global : Global functionalities
    * process : Functionalities related to the node process (v8 instance) itself, such as the cpu usage or the pid



