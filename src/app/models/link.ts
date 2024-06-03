export class Link {
    
     name: string; 
    link: string;
    category: string;
    hashtags:  string[]; 
    constructor(name: string,link: string,category: string, hashtags: string[]) { 
         this.name = name; 
        this.link=link;
        this.category = category;
        this.hashtags = hashtags; 
      }
}
