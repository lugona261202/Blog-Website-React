import conf from "../src/conf/conf";
import { Client,Databases,Storage,Query,ID} from "appwrite"

export class service {
     client = new client()
     databases; 
     bucket;
     constructor(){
        this.client 
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases= new Databases(this.client);
        this.bucket= new Storage(this.client);
     }
     async createPost({title,slug,featuredImage,content,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteCollectionId,
                conf.appwriteDatabaseId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost::error",error);
        }
     }
     async updatePost (slug,{title,content,featuredImage,status,userId}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteCollectionId,
                conf.appwriteDatabaseId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost::error",error);
        }
     }

    async deletePost (slug){
        try {
            await this.databases.deleteDocument(
               conf.appwriteCollectionId,
               conf.appwriteDatabaseId,
               slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost::error",error);
            return false
        }

    }
    async getPost (){
        try {
            await this.databases.getDocument(
                conf.appwriteCollectionId,
                conf.appwriteDatabaseId,
                slug  
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: getPost::error",error);  
            return false
        }
    }
    async getPosts (queries = [Query.equal("status","active")]){
        try {
            await this.databases.listDocuments(
                conf.appwriteCollectionId,
                conf.appwriteDatabaseId,
                queries  
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts::error",error);
            return false  
        }
    }

    // file upload services

    async uploadFile(file){
        try {
             return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
             )
        } catch (error) {
            console.log("Appwrite service :: uploadFile::error",error);
            return false  
        }
    }
    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                ID.unique(),
                fileId
            )
        } catch (error) {
            console.log("Appwrite service :: deleteFile::error",error);
            return false
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

} 
const service = new Service ()
export default service
