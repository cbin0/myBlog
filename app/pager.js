/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-9-2
 * Time: 下午4:40
 */

module.exports = function(page, count, pagecount){

    function Pager(page, count, pagecount){

        this.page = page || 1;
        this.total = 0;
        this.count = count || 20;
        this.pagecount = pagecount || 10;

    };

    Pager.prototype.setTotal = function(data){
        this.total = data;
        return this;
    }

    Pager.prototype.__defineGetter__("totalpage",function(){
        return this.total%this.count==0?this.total/this.count:
            this.total/this.count-this.total%this.count/this.count+1;
    });

    Pager.prototype.__defineGetter__("pages",function(){
        var pn = this.page,
            pagecount = this.pagecount,
            p = this.totalpage,
            pages = [];

        if(p<=10){
            for(var i=1;i<=p;i++)
                pages.push(i);
        }else{
            if(pn<=pagecount/2)
                for(var i=1;i<=pagecount;i++)
                    pages.push(i);
            else{
                var end=pn>p-pagecount/2?p:pn+pagecount/2;
                for(var i=pn-pagecount/2-1;i<=end;i++){
                    pages.push(i);
                };
            };
        };

        return pages;
    });

    return new Pager(page, count, pagecount);

};