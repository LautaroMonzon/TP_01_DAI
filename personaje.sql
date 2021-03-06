USE [master]
GO
/****** Object:  Database [DAI_personaje]    Script Date: 5/6/2022 22:17:20 ******/
CREATE DATABASE [DAI_personaje]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'DAI_personaje', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\DAI_personaje.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'DAI_personaje_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\DAI_personaje_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [DAI_personaje] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [DAI_personaje].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [DAI_personaje] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [DAI_personaje] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [DAI_personaje] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [DAI_personaje] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [DAI_personaje] SET ARITHABORT OFF 
GO
ALTER DATABASE [DAI_personaje] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [DAI_personaje] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [DAI_personaje] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [DAI_personaje] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [DAI_personaje] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [DAI_personaje] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [DAI_personaje] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [DAI_personaje] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [DAI_personaje] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [DAI_personaje] SET  DISABLE_BROKER 
GO
ALTER DATABASE [DAI_personaje] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [DAI_personaje] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [DAI_personaje] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [DAI_personaje] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [DAI_personaje] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [DAI_personaje] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [DAI_personaje] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [DAI_personaje] SET RECOVERY FULL 
GO
ALTER DATABASE [DAI_personaje] SET  MULTI_USER 
GO
ALTER DATABASE [DAI_personaje] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [DAI_personaje] SET DB_CHAINING OFF 
GO
ALTER DATABASE [DAI_personaje] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [DAI_personaje] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [DAI_personaje] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [DAI_personaje] SET QUERY_STORE = OFF
GO
USE [DAI_personaje]
GO
/****** Object:  User [alumno]    Script Date: 5/6/2022 22:17:21 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [alumno]
GO
/****** Object:  Table [dbo].[PeliculaoSerie]    Script Date: 5/6/2022 22:17:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PeliculaoSerie](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Imagen] [varchar](200) NULL,
	[titulo] [varchar](200) NULL,
	[Fechadecreacion] [date] NULL,
	[Calificacion] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Relacion]    Script Date: 5/6/2022 22:17:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Relacion](
	[idPersonaje] [int] NULL,
	[idPelicula] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tablapersonaje]    Script Date: 5/6/2022 22:17:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tablapersonaje](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NULL,
	[peso] [int] NULL,
	[imagen] [varchar](200) NULL,
	[historia] [varchar](200) NULL,
	[edad] [int] NULL
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[PeliculaoSerie] ON 

INSERT [dbo].[PeliculaoSerie] ([Id], [Imagen], [titulo], [Fechadecreacion], [Calificacion]) VALUES (1, N'D', N'D', CAST(N'2222-11-11' AS Date), 4)
INSERT [dbo].[PeliculaoSerie] ([Id], [Imagen], [titulo], [Fechadecreacion], [Calificacion]) VALUES (2, N'b', N'b', CAST(N'1111-11-11' AS Date), 2)
INSERT [dbo].[PeliculaoSerie] ([Id], [Imagen], [titulo], [Fechadecreacion], [Calificacion]) VALUES (3, N'c', N'c', CAST(N'3333-11-11' AS Date), 3)
INSERT [dbo].[PeliculaoSerie] ([Id], [Imagen], [titulo], [Fechadecreacion], [Calificacion]) VALUES (4, N'E', N'E', CAST(N'1111-01-11' AS Date), 4)
INSERT [dbo].[PeliculaoSerie] ([Id], [Imagen], [titulo], [Fechadecreacion], [Calificacion]) VALUES (5, N'E', N'E', CAST(N'5555-02-02' AS Date), 1)
SET IDENTITY_INSERT [dbo].[PeliculaoSerie] OFF
GO
INSERT [dbo].[Relacion] ([idPersonaje], [idPelicula]) VALUES (3, 2)
INSERT [dbo].[Relacion] ([idPersonaje], [idPelicula]) VALUES (2, 1)
INSERT [dbo].[Relacion] ([idPersonaje], [idPelicula]) VALUES (3, 1)
INSERT [dbo].[Relacion] ([idPersonaje], [idPelicula]) VALUES (1, 3)
INSERT [dbo].[Relacion] ([idPersonaje], [idPelicula]) VALUES (1, 1)
GO
SET IDENTITY_INSERT [dbo].[Tablapersonaje] ON 

INSERT [dbo].[Tablapersonaje] ([id], [nombre], [peso], [imagen], [historia], [edad]) VALUES (1, N'Laucha', 2, N'A', N'A', 2)
INSERT [dbo].[Tablapersonaje] ([id], [nombre], [peso], [imagen], [historia], [edad]) VALUES (2, N'b', 2, N'b', N'b', 2)
INSERT [dbo].[Tablapersonaje] ([id], [nombre], [peso], [imagen], [historia], [edad]) VALUES (4, N'b', 3, N'b', N'A', 1)
SET IDENTITY_INSERT [dbo].[Tablapersonaje] OFF
GO
USE [master]
GO
ALTER DATABASE [DAI_personaje] SET  READ_WRITE 
GO
