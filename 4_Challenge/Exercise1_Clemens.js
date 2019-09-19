String.prototype.replaceAll = function(str1, str2, ignore) 
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
} 

var vienna_array = [ ["Vienna", "is", "a", "nice", "city"],["Vienna", "is", "a", "nice", "city"],["Vienna", "is", "a", "nice", "city"],["Vienna", "is", "a", "nice", "city"],["Vienna", "is", "a", "nice", "city."] ];
vienna_best = vienna_array[0][0] + " " + vienna_array[1][1] + " " + vienna_array[2][2] + " " + vienna_array[3][3]+ " " + vienna_array[4][4];
document.write(vienna_best);
document.write("<br>");

var non_structure = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$\"properties $flow$down;$actions$flow$up\"."

structure = non_structure.replaceAll("$", " ");

document.write(structure);