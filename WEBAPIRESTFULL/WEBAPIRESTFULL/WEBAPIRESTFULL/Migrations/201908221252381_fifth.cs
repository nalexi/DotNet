namespace WEBAPIRESTFULL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class fifth : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Livros", "Registro", c => c.Int());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Livros", "Registro", c => c.Int(nullable: false));
        }
    }
}
