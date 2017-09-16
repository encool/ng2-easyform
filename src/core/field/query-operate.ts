export class QueryOperate {
    name: string
    operate: string
    private constructor(name: string, operate: string) {
        this.name = name
        this.operate = operate
    }

    static eq: QueryOperate = new QueryOperate("eq", "=")	//=	equal
    static cn: QueryOperate = new QueryOperate("cn", "LIKE")	//LIKE '%data%'	

    // ne	!=	not equal
    // lt	<	less than
    // le	<=	less equal
    // gt	>	greater than
    // ge	>=	greater equal
    // nu	IS NULL	null
    // nn	IS NOT NULL	not null
    // bw	LIKE 'data%'	
    // bn	NOT LIKE 'data%'	
    // ew	LIKE '%data'	
    // en	NOT LIKE '%data'	
    // nc	NOT LIKE '%data%'	
    // in	IN (data)	data可为对象、数组、List集合
    // ni	NOT IN (data)	data可为对象、数组、List集合   
}
