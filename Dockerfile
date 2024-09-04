# Usar a imagem do Node.js como base
FROM node:18-alpine

# Definir o diretório de trabalho dentro do container
WORKDIR /portfolio

# Copiar o package.json e o package-lock.json para o diretório de trabalho
COPY package.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Expor a porta que o app vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
