export class Favorites{
    constructor (root){
        this.root = document.querySelector(root)
        this.load()
    }

    load(){
        this.entries = [
            {
                login: 'viniseven',
                name: 'Marcus Vinícius',
                public_repos: '35',
                followers: '600'
            },
            {
                login: 'diego3g',
                name: 'Diego Fernandes',
                public_repos: '35',
                followers: '600'
            }
            ]
        }

    delete(user){
        const filteredEntries = this.entries.filter(entry =>
            entry.login !== user.login)
            
            console.log(filteredEntries)
    }
}


export class FavoritesView extends Favorites{
    constructor (root){
        super(root)

        this.tbody = this.root.querySelector('table tbody')
        this.update()
    }

    update(){
       this.removeAllTr() 

       this.entries.forEach(user => {
            const row = this.createRow()
            
            row.querySelector('#user img').src = `https://github.com/${user.login}.png`
            row.querySelector('#user img').alt = `Foto de perfil do usuário ${user.name}`
            row.querySelector('#user a').href = `https://github.com/${user.login}`
            row.querySelector('#user p').textContent = user.name
            row.querySelector('#user span').textContent = user.login
            row.querySelector('#repositories').textContent = user.public_repos
            row.querySelector('#followers').textContent = user.followers

            row.querySelector('#btn_action').onclick = () => {
                const isOk = confirm('Deseja excluir o usuário')

                if(isOk){
                    this.delete(user)
                }
            }


            this.tbody.append(row)
       })
    }

    createRow(){

        const tr = document.createElement('tr')

        tr.innerHTML = `
            <td id='user'>
                <img src="https://www.github.com/viniseven.png" 
                alt="Foto de perfil do usuário">

                <a href="https://www.github.com/viniseven" target='_blank'>
                    <p>Marcus Vinícius</p>
                    <span>/viniseven</span>
                </a>    
            </td>

            <td id='repositories'>
                42
            </td>

            <td id='followers'>
                2000
            </td>

            <td id="btn_action">
                <button>Remover</button>
            </td>
        `
        return tr
    }

    removeAllTr(){
       
        const tbody = this.root.querySelector('table tbody')
        tbody.querySelectorAll('tr').forEach((tr) => {
            tr.remove()
        })
    }
}